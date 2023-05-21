import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';

const Image = () => {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        landingImage: {
            position: 'absolute',
            left: '35%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '50%',
            maxWidth: '100%',
            boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
            transition: 'opacity 0.3s',
            [t.breakpoints.down('lg')]: {
                width: '350px',
                height: '350px'
            },
            [t.breakpoints.down('md')]: {
                width: '250px',
                height: '250px',
                left: '50%',
                top: '30%',
                border: '8px solid #eaeaea',
                transform: 'translate(-50%, -50%)',
            },
            [t.breakpoints.down('sm')]: {
                width: '200px',
                height: '200px',
            },
            
        },
    }))


    const classes = useStyles()

    return (
        <img
            src={headerData.image}
            alt="Profile"
            className={classes.landingImage}
            style={{
                opacity: '1',
                borderColor: theme.secondary,
            }}
        />
    )
}

export default Image