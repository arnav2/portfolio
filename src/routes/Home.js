import React from 'react'
import Home from '../components/Home/Home'
import { Box } from '@mui/material'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Education from '../components/Education/Education'
import Navbar from "../components/Navbar/Navbar";
import Contacts from '../components/Contacts/Contact'
import Skills from '../components/Skills/Skills'
import Blog from '../components/Blog/Blog'

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Blog />
      <Contacts />

    </Box>
  )
}

export default HomePage