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
import orderBy from "lodash/orderBy";
import MdKeyboardArrowUp from 'react-icons/md'
import MdKeyboardArrowDown from 'react-icons/md';
import {MdDeleteOutline} from 'react-icons/md';
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
    label: 'Amount',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

const organizeExp = (allExpense)=> {
  return allExpense.map(function(each, idx) {
    return {date: each['TransactionDate'].slice(0, 10), vendor: each['Vendor'], category: each['Category'], amount: each['Amount'], idx: idx
  };
})
};
export default function DetailTable({allExpense,  deleteExpense}) {
  // console.log('row', rows);
  // console.log('allExpense in detail table', allExpense);

  const [columnToSort, setColumn] = React.useState('');
  const [sortDirection, setSortDirection] = React.useState('desc');
  const [tableData, setTable] = React.useState(organizeExp(allExpense))

  React.useEffect(()=>{
    setTable(organizeExp(allExpense))
  }, [allExpense])
  let rows = orderBy(tableData, columnToSort, sortDirection);
  // console.log(tableData);
  // console.log('colunmName', columnToSort);
  // console.log('columnSortyBY, ', sortDirection)

  // console.log('rows in detail table', rows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleSort = (columnName)=> {
    console.log('columnName clicked', columnName);
    setColumn(columnName);
    setSortDirection(columnToSort === columnName? invertDirection[sortDirection] : 'asc')
  }

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
                  <TableCell style={{backgroundColor:'black'}} onClick={()=>handleSort(column.id)}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                {/* <TableCell>Delete</TableCell> */}
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
                      <div onClick={()=>deleteExpense(row.idx)}><MdDeleteOutline style={{paddingTop: '5px', marginTop: '10px'}} size={30}/></div>
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
