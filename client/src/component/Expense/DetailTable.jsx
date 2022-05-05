import * as React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import formatDate from '../../utils/formatDate.js';
import MuiTableHead from "@material-ui/core/TableHead";

const columns = [
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'vendor', label: 'Vendor', minWidth: 100 },
  {
    id: 'category',
    label: 'Category',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'amount',
    label: 'vendor',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

export default function DetailTable({allExpense}) {
  // console.log('row', rows);
  // console.log('allExpense in detail table', allExpense);
  let tableData = allExpense.map(function(each) {
    return {date: each['TransactionDate'].slice(0, 10), vendor: each['Vendor'], category: each['Category'], amount: each['Amount']};
  })
  // console.log(tableData);
  const rows = tableData;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const TableHead = withStyles(theme => ({
  //   root: {
  //     backgroundColor: '#DEE2E6'
  //   }
  // }))(MuiTableHead);

  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
