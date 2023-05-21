import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContext';
import { makeStyles } from '@mui/styles';

const NotFound = () => {
    const { theme } = useContext(ThemeContext);
    const useStyles = makeStyles((t) => ({
        notFoundDiv: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            backgroundColor: theme.secondary, 
            width: '100%', 
            height: '100vh',
            position: 'absolute',
        },
        heading: {
            fontSize: '3.5rem',
            fontFamily: 'var(--primaryFont)',
            color: theme.primary
        },
    }))

    const classes = useStyles()

    return (
        <Box className={classes.notFoundDiv}>
            <Typography className={classes.heading} variant="p" gutterBottom>
                The page you are looking for doesn't exist
            </Typography>
        </Box>
    )
}

export default NotFound