import React, { useContext } from 'react';
import { CssBaseline, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import { aboutData } from '../data/aboutData'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));


export default function About() {
  
  const { theme } = useContext(ThemeContext);

  return (
    <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
        <div className="line-styling">
          <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
          <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
          <div className="style-line" style={{backgroundColor: theme.primary}}></div>
        </div>
        <div className="about-body">
            <div className="about-description">
                <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
            </div>
            <div className="about-img">
                <img 
                    src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                    alt="" 
                />
            </div>
        </div>
    </div>

)
}