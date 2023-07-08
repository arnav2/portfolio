import React from "react";

import Home from "./routes/Home";
import BlogPage from "./routes/BlogPage";
import ScrollToTop from "./utils/ScrollToTop";
import { StyledEngineProvider } from "@mui/material";
import { headerData } from './data/headerData'
import { Helmet } from 'react-helmet'
import BackToTop from './components/BackToTop'

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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/blog" exact element={<BlogPage />} />
          <Route path="/portfolio/blog" exact element={<BlogPage />} />
        </Routes>
      </Router>
      <BackToTop />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
