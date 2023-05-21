import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContext';

import Type from './Type';
import Buttons from './Buttons';
const RightLandingContainer = () => {
    const {theme} = useContext(ThemeContext)
    
    const useStyles = makeStyles((t) => {
        console.log(t)
        return {
            rightLandingContainer: {
                flex: '65%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',
                backgroundColor: theme.secondary,
                [t.breakpoints.down('md')]: {
                    boxSizing: 'border-box',
                    padding: '0 2rem',
                    flex: 'initial',
                    height: '70%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            },
            rightContainerContent: {
                width: '45%',
                marginRight: '7rem',
                fontFamily: 'var(--primaryFont)',
                fontStyle: 'normal',
                color: theme.tertiary,
                fontSize: '1.25rem',
                margin: '1rem 0',
            },
        }
    })
    const classes = useStyles()

    return (
        <Box className={classes.rightLandingContainer}>
            <Box className={classes.rightContainerContent}>
                <Type />
                <Buttons />
            </Box>
        </Box>
    )
}

export default RightLandingContainer