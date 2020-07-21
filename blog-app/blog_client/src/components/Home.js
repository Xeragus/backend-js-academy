import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#1</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Posted at</TableCell>
            <TableCell align="right">Posted by</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={1}>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="right">Living in Macedonia</TableCell>
              <TableCell align="right">24 July</TableCell>
              <TableCell align="right">Boban Sugareski</TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell component="th" scope="row">
                2
              </TableCell>
              <TableCell align="right">Why I love watching football</TableCell>
              <TableCell align="right">21 July</TableCell>
              <TableCell align="right">Dragana</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
