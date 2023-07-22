import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AllChars = ({allChars}) => {
    return (
       <> 
        <p> {allChars.length} </p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right"> Height </TableCell>
                <TableCell align="right">Mass</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {allChars.map((character) => (
                <TableRow
                  key={character.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {character.name}
                  </TableCell>
                  <TableCell align="right">{character.height}</TableCell>
                  <TableCell align="right">{character.mass}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </> 
      );


}
export default AllChars;