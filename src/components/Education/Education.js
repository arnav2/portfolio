import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { Box, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationBody: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        educationDescription: {
            width: '100%',
            flex: '0.65',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '7%'
        },
        educationHeader: {
            fontWeight: 'bold',
            fontSize: '3.5rem',
            fontFamily: 'var(--primaryFont)',
            marginBottom: '2rem',
            color: theme.primary
        },
        educationImage: {
            boxSizing: 'border-box',
            padding: '1rem',
            flex: '0.35',
            marginTop: '1rem',
            pointerEvents: 'none',
        }
    }))

    const classes = useStyles();
    
    return (
        <Box sx={{backgroundColor: theme.secondary}}>
            <Box className={classes.educationBody}>
                <Box className={classes.educationDescription}>
                <Typography variant='h1' className={classes.educationHeader}>Education</Typography>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </Box>
                <Box className={classes.educationImage}>
                    <img src={theme.eduimg} alt="" width="100%"/>
                </Box>
            </Box>
        </Box>
    )
}

export default Education
