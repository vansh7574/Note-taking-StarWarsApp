import React, { useState } from "react";

import { Box, Tab, Tabs } from "@mui/material";

import CharacterList from "./views/CharacterList";
import Notes from "./views/Notes";

import "./App.css";

const App = () => {
  const [activeView, setActiveView] = useState("NOTES");

  const handleChangeTabs = (event, newValue) => {
    setActiveView(newValue);
  };
  return (
    <Box className="App" >
      <Tabs value={activeView} onChange={handleChangeTabs} textColor="white" sx={{fontSize:'20px'}} centered>
        <Tab value={"NOTES"} label="NOTES"  />
        <Tab value={"CHARACTER"} label="CHARACTER LIST" />
      </Tabs>
      <Box mt="10px" >
        {activeView === "CHARACTER" ? <CharacterList /> : <Notes />}
      </Box>
    </Box>
  );
};

export default App;
