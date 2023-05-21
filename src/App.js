import React from "react";

import Home from "./routes/Home";
import ScrollToTop from "./components/ScrollToTop";
import { StyledEngineProvider } from "@mui/material";
import { headerData } from './data/headerData'
import { Helmet } from 'react-helmet'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import "./style.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
