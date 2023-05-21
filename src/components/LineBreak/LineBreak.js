import React, { useContext } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { ThemeContext } from '../../contexts/ThemeContext';

const LineBreak = () => {
    const { theme} = useContext(ThemeContext)
    const useStyles = makeStyles((t) => ({
        lineStyling: {
            position: 'absolute',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '50px',
            width: '85%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        styleCircle: {
            width: '10px',
            height: '10px',
            borderRadius: '50%'
        },
        styleLine: {
            width: '95%',
            height: '5px',
            borderRadius: '10px'
        }
    }))

    const classes = useStyles()

    return (
        <Box className={classes.lineStyling}>
            <Box className={classes.styleCircle} style={{backgroundColor: theme.primary}}></Box>
            <Box className={classes.styleCircle} style={{backgroundColor: theme.primary}}></Box>
            <Box className={classes.styleLine} style={{backgroundColor: theme.primary}}></Box>
        </Box>
    )
}

export default LineBreak