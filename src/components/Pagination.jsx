import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    marginTop: '10px',
  },
}));

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {

  const classes = useStyles();

  const handlePageChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <Box className={classes.paginationContainer}>
      <Stack spacing={2} >
        <Pagination
          shape="rounded"
          size="medium"
          color="primary"
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </Box>
  );
}

export default PaginationComponent;