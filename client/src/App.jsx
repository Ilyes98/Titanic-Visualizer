import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FileUpload from './components/FileUpload';
import PassengerList from './components/PassengerList';
import Pagination from './components/Pagination';
import Menu from './components/Menu';
import GenderChart from './components/GenderChart';

function App() {
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [ticketFilter, setTicketFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [genderData, setGenderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [passengersPerPage] = useState(10);
  const [viewMode, setViewMode] = useState('list');
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchPassengers(setCurrentPage, setLoading, setPassengers);
  }, [currentPage]);

  const fetchPassengers = () => {
    axios.get('http://localhost:5000/passengers')
      .then(response => {
        setPassengers(response.data.passengers);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching passengers:', error);
        setError('Failed to fetch passengers');
        setLoading(false);
      });
  };

  const handleUpload = (file) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('csv_file', file);

    axios.post('http://localhost:5000/import_csv', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
      fetchPassengers();
      setLoading(false);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
      setError('Error uploading file');
      setLoading(false);
    });
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    const maleCount = passengers.filter(passenger => passenger.Sex === 'male').length;
    const femaleCount = passengers.filter(passenger => passenger.Sex === 'female').length;
    setGenderData([
      { name: 'Male', count: maleCount },
      { name: 'Female', count: femaleCount }
    ]);
  }, [passengers]);

  const handleViewChange = (mode) => {
    setViewMode(mode);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const indexOfLastPassenger = currentPage * passengersPerPage;
  const indexOfFirstPassenger = indexOfLastPassenger - passengersPerPage;
  const currentPassengers = passengers.slice(indexOfFirstPassenger, indexOfLastPassenger);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRowsPerPageChange = (rowsPerPage) => {
    // Mettre à jour le nombre de passagers par page
  };

  const filteredPassengers = currentPassengers.filter(passenger =>
    passenger.Name.toLowerCase().includes(filterValue.toLowerCase()) &&
    (ageFilter === '' || passenger.Age.toString() === ageFilter) &&
    (ticketFilter === '' || passenger.Ticket.toString().includes(ticketFilter)) &&
    (genderFilter === '' || passenger.Sex === genderFilter)
  );

  return (
    <div className="App">
      <Menu
        anchorEl={anchorEl}
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
        handleViewChange={handleViewChange}
      />
      {viewMode !== 'graph' && ( // Condition pour afficher le composant FileUpload si le mode de visualisation n'est pas 'graph'
        <FileUpload handleUpload={handleUpload} loading={loading} />
      )}
      {error && <p className="error-message">Error: {error}</p>}

      {viewMode === 'list' && passengers.length > 0 && (
        <div className="list-view">
          <input
            type="text"
            placeholder="Filter by name..."
            value={filterValue}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            placeholder="Filter by age..."
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by ticket..."
            value={ticketFilter}
            onChange={(e) => setTicketFilter(e.target.value)}
          />
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="">Filter by gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <PassengerList passengers={filteredPassengers} filterValue={filterValue} />

          <Pagination
            totalCount={passengers.length}
            page={currentPage}
            rowsPerPage={passengersPerPage}
            onPageChange={paginate}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
      )}

       {viewMode === 'graph' && passengers.length > 0 && (
        <div className="graph-view">
          <GenderChart genderData={genderData} />
        </div>
      )}
    </div>
  );
}

export default App;
