import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles';
import Typewriter from "typewriter-effect";
import { Box } from "@mui/material";
import { ThemeContext } from '../../contexts/ThemeContext';

function Type() {
  const { theme } = useContext(ThemeContext)

  const useStyles = makeStyles((t) => (
    {
      typeWriterStringStyle: {
        width: '45%',
        marginRight: '7rem',
        fontFamily: 'var(--primaryFont)',
        fontStyle: 'normal',
        color: theme.tertiary
      }
    }
  ))
  const classes = useStyles()

  return (
    <Box classes={classes.typeWriterStringStyle}>
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Deep Learning Engineer",
          "Software Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </Box>
  );
}

export default Type;
