import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import LineBreak from '../LineBreak/LineBreak';

function About() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        aboutBody: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingTop: '8rem',
            height: 'fit-content'
        },
        aboutDescription: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            flex: 0.5,
            width: '100%',
            height: 'fit-content'
        },
        heading: {
            marginBottom: '40px',
            fontSize: '3.5rem',
            fontFamily: 'var(--primaryFont)',
            color: theme.primary
        },
        paragraph: {
            fontSize: '1.25rem',
            fontFamily: 'var(--primaryFont)',
            color:theme.tertiary80,
            display: 'block',
            marginBottom: '24px' //default e.g. body1/paragraphs
        },
        aboutImg: {
            marginTop: '40px',
            pointerEvents: 'none'
        },
        image: {
            width: '380px',
            flex: 0.5
        }
    }))

    const classes = useStyles()
    return (
        <Box id="about" sx={{position: 'relative', backgroundColor: theme.secondary}}>
            <LineBreak />
            <Box className={classes.aboutBody}>
                <Box className={classes.aboutDescription}>
                    <Typography variant="h2" className={classes.heading}>{aboutData.title}</Typography>
                    <Typography variant="p" className={classes.paragraph}>
                        {aboutData.description1}
                    </Typography>
                    <Typography variant="p" className={classes.paragraph}>
                        {aboutData.description2}
                    </Typography>
                </Box>
                <Box className={classes.aboutImg}>
                    <img
                        className={classes.image}
                        src={theme.aboutimg}  
                        alt="" 
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default About
