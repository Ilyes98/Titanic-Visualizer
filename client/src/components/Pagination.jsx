import React from 'react';
import { makeStyles, TablePagination } from '@material-ui/core';
import PropTypes from 'prop-types';
import '../styles/Pagination.css';


const useStyles = makeStyles(theme => ({
  paginationContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2)
  }
}));

function Pagination({ totalCount, page, rowsPerPage, onPageChange, onRowsPerPageChange }) {
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    onPageChange(newPage);
  };

  const handleChangeRowsPerPage = event => {
    onRowsPerPageChange(event.target.value);
  };

  return (
    <div className={classes.paginationContainer}>
      <TablePagination
        component="div"
        count={totalCount}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired
};

export default Pagination;
