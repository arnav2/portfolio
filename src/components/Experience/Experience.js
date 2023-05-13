import React, {useContext} from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { experienceData } from '../../data/experienceData';
import { ThemeContext } from "../../contexts/ThemeContext";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  
  const { theme } = useContext(ThemeContext);
  
  const useStyles = makeStyles((t) => (
    {
      experience: {
        minHeight: '100vh'
      },
      experienceBody: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },
      experienceImage: {
        boxSizing: 'border-box',
        padding: '1rem',
        flex: '0.35',
        marginLeft: '7%',
        marginTop: '1rem',
        pointerEvents: 'none',
      },
      experienceDescription: {
        width: '100%',
        flex: '0.65',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: '2rem'
      },
    }
  ))

  const classes = useStyles();

  return (
    <Box className={classes.experience} id="experience" sx={{backgroundColor: theme.secondary}}> 
      <Box className={classes.experienceBody}>
        <Box className={classes.experienceImage}>
          <img src={theme.expimg} alt="" />
        </Box>
        <Box className={classes.experienceDescription}>
          <h1 style={{color:theme.primary}}>Experience</h1>
          {experienceData.map(exp =>(
              <ExperienceCard 
                  key={exp.id}
                  id={exp.id}
                  jobtitle={exp.jobtitle}
                  company={exp.company}
                  startYear={exp.startYear}
                  endYear={exp.endYear}/>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Experience