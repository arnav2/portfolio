import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from './Image';
import LeftLandingContainer from './LeftLandingContainer';
import RightLandingContainer from './RightLandingContainer';

function Home() {
    const useStyles = makeStyles((t) => (
        {
        landing: {
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        landingContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            height: '100%',
            width: '100%',
            [t.breakpoints.down('md')]: {
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        }
    }));
    const classes = useStyles()

    return (
        <Box className={classes.landing}>
            <Box className={classes.landingContainer}>
                <LeftLandingContainer />
                <Image />
                <RightLandingContainer />
            </Box>
        </Box>
    );
}

export default Home;
