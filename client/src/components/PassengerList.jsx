import React from 'react';
import '../styles/PassengerList.css';

function PassengerList({ passengers, filterValue }) {
  const filteredPassengers = passengers.filter(passenger =>
    passenger.Name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="PassengerList">
      <table>
        <thead>
          <tr>
            <th>Passenger</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Ticket</th>
          </tr>
        </thead>
        <tbody>
          {filteredPassengers.map(passenger => (
            <tr key={passenger.PassengerId}>
              <td>{passenger.PassengerId}</td>
              <td>{passenger.Name}</td>
              <td>{passenger.Age}</td>
              <td>{passenger.Sex}</td>
              <td>{passenger.Ticket}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PassengerList;
