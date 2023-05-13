import React, { useState, useEffect, useContext } from "react";

import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeContext } from "./contexts/ThemeContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import "./style.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// import Preloader from "./components/Pre";
// import ScrollToTop from "./components/ScrollToTop";
import ToggleSwitch from "./components/ThemeToggle/ToggleSwitch";

function App() {
  const theme = createTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
    // <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
    //   <Router>
    //     <Navbar />
    //     <div className="App" id={load ? "no-scroll" : "scroll"}>
    //     <Routes>
    //       <Route path="/test" element={<Home />} />
    //       <Route path="/project" element={<Project />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="*" element={<Navigate to="/"/>} />
    //     </Routes>
    //     </div>
    //     <ToggleSwitch />
    //     <Footer />
    //   </Router>
      
    // </ThemeProvider>
  );
}

export default App;
