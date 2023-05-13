import React from 'react'
import Home from '../components/Home/Home'
import { Box } from '@mui/material'
import { headerData } from '../data/headerData'
import { Helmet } from 'react-helmet'
import Experience from '../components/Experience/Experience'
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <Box>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <Navbar />
      <Home />
      <Experience />
    </Box>
  )
}

export default HomePage