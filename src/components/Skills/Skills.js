import React,{ useContext } from 'react';
import { makeStyles } from '@mui/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { Typography, Box } from '@mui/material';
import MyMarquee from './MyMarquee';

function Skills() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        skills: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '2.5rem 2rem 2rem 2rem',
            backgroundColor: theme.secondary,
        },
        skillsHeaderContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        skillsHeader: {
            fontFamily: 'var(--primaryFont)',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '3.5rem',
            textAlign: 'center',
            color: theme.primary
        },
    }))

    const classes = useStyles();
    return (
        <Box id="skills" className={classes.skills}>
            <Box className={classes.skillsHeaderContainer}>
                <Typography variant='h2' className={classes.skillsHeader}>Skills</Typography>
            </Box>
            <MyMarquee />
        </Box>
    )
}

export default Skills
