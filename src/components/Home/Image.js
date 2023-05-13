import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';

const Image = () => {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        landingImage: {
            imgSize: '400px',
            position: 'absolute',
            left: '35%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '50%',
            boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
            transition: 'opacity 0.3s'
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