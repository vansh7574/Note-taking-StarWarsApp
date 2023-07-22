import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AllChars from "../components/CharacterList/AllChars";

const CharacterList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [allMovies, setAllFilmsTitles] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);

  const handleSearch = async () => {
    try {
      // Fetch character data from the SWAPI based on the search term
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      );
      setSearchResults(response.data.results);
      await handleFilmInfo(response.data.results[0].films);
      await handleVehicleInfo(response.data.results[0].vehicles);
    } catch (error) {
      console.error("Error searching characters:", error);
    }
  };

  const handleFilmInfo = async (films) => {
    //retrieving all the film info
    try {
      films.map((film) => {
        return axios.get(film).then((data) => {
          setAllFilmsTitles((prev) => [...prev, data.data.title]);
        });
      });
    } catch (error) {
      console.error("Error Films:", error);
    }
  };

  const handleVehicleInfo = async (vehicles) => {
    // retreiving all the vehicle info
    try {
      vehicles.map((vehicle) => {
        return axios.get(vehicle).then((data) => {
          setAllVehicles((prev) => [...prev, data.data.name]);
        });
      });
      //console.log(vehicless)
    } catch (error) {
      console.error("Error vehicles:", error);
    }
  };

  const getCompleteList = async () => {
    try {
      // Fetch all characters from the SWAPI
      const charsArr = [];
      for (let i = 1; i < 10; i++) {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${i}`
        );
        response.data.results.forEach((data) => {
          charsArr.push(data);
        });
      }

      setAllCharacters(charsArr);
    } catch (error) {
      console.error("Error characters:", error);
    }
  };

  return (
    <div style={{ marginTop: "10%" }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: "2%" }}>
        Lookup Your Favorite Characters!
      </Typography>
      {/* Search field for users to enter a character's name */}
      <TextField
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter any character name"
        variant="outlined"
        sx={{
          bgcolor: "#fff",
        }}
        fullWidth
      />
      <Button type="button" onClick={handleSearch}>
        Search
      </Button>

      {/* Display search results in a table */}
      <TableContainer
        component={Paper}
        style={{ marginTop: "5%", marginBottom: "2%" }}
      >
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Character Name</TableCell>
              <TableCell align="right">height</TableCell>
              <TableCell align="right"> Mass </TableCell>
              <TableCell align="right"> Hair Color </TableCell>
              <TableCell align="right"> Skin Color </TableCell>
              <TableCell align="right"> Eye Color </TableCell>
              <TableCell align="right"> Birth Year </TableCell>
              <TableCell align="right"> Gender </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults.map((character) => (
              <TableRow
                key={character.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {character.name}
                </TableCell>
                <TableCell align="right">{character.height}</TableCell>
                <TableCell align="right">{character.mass}</TableCell>
                <TableCell align="right">{character.hair_color}</TableCell>
                <TableCell align="right">{character.skin_color}</TableCell>
                <TableCell align="right">{character.eye_color}</TableCell>
                <TableCell align="right">{character.birth_year}</TableCell>
                <TableCell align="right">{character.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Display Film Data in a table */}
      <TableContainer component={Paper} style={{ marginBottom: "2%" }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Films</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allMovies.map((movi) => (
              <TableRow
                key={movi}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {movi}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Display vehicle Data in a table */}
      <TableContainer component={Paper} style={{ marginBottom: "10%" }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vehicles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allVehicles.map((vehicle) => (
              <TableRow
                key={vehicle}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {vehicle}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom style={{ marginBottom: "5%" }}>
        List of all star wars Characters!
      </Typography>

      <Button type="button" onClick={getCompleteList}>
        click to get the list of all characters
      </Button>

      <AllChars allChars={allCharacters} />
    </div>
  );
};

export default CharacterList;
