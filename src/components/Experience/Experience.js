import React, {useContext} from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { experienceData } from '../../data/experienceData';
import { ThemeContext } from "../../contexts/ThemeContext";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  
  const { theme } = useContext(ThemeContext);
  
  const useStyles = makeStyles((t) => (
    {
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
      experienceHeading: {
        fontWeight: 'bold',
        fontSize: '3.5rem',
        fontFamily: 'var(--primaryFont)',
        marginBottom: '2rem',
        color: theme.primary
      }
    }
  ))

  const classes = useStyles();

  return (
    <Box id="experience" sx={{backgroundColor: theme.secondary}}> 
      <Box className={classes.experienceBody}>
        <Box className={classes.experienceImage}>
          <img width="100%" src={theme.expimg} alt="" />
        </Box>
        <Box className={classes.experienceDescription}>
          <Typography variant="h1" className={classes.experienceHeading}>Experience</Typography>
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