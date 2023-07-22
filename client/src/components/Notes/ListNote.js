import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const ListNote = ({ data, handleChangeMode, handleDeleteNoteById }) => {
  return (
    <Box display="flex" flexDirection="column" gap="10px">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="left">Note Description</TableCell>
              <TableCell align="center">ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!data?.length ? (
              <TableRow>
                <TableCell align="center">No Data</TableCell>
              </TableRow>
            ) : (
              data?.map((row, idx) => (
                <TableRow
                  key={row.description + idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.description}
                  </TableCell>
                  <TableCell align="right">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-evenly"
                      gap="10px"
                    >
                      <Button
                        variant="outlined"
                        startIcon={<ModeEditIcon />}
                        onClick={() => handleChangeMode("EDIT", row._id)}
                      >
                        Edit Note
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteNoteById(row._id)}
                      >
                        Delete Note
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        fullWidth
        variant="text"
        startIcon={<AddIcon />}
        onClick={() => handleChangeMode("ADD")}
        sx={{color:'white', fontSize:'20px'}}
      >
        Add New Note
      </Button>
    </Box>
  );
};

export default ListNote;
