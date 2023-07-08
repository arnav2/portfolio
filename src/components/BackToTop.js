import React, { useState, useContext } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { makeStyles } from '@mui/styles';

import { ThemeContext } from '../contexts/ThemeContext';
import { Box } from '@mui/material';
import { Button } from 'react-bootstrap';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const { theme } = useContext(ThemeContext);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    const useStyles = makeStyles(() => ({
      backToTop: {
        position: 'fixed', 
        right: '10px',
        bottom: '60px',
        height: '30px',
        fontSize: '3rem',
        zIndex: 999
      },
      icon: {
            fontSize: '3rem',
            color: theme.tertiary,
      },
      button: {
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        background: 'none',
        padding: '20px',
      }
    }));

    const classes = useStyles();

    return (
        <Box
            style={{ display: visible ? 'inline' : 'none' }}
            className={classes.backToTop}
        >
            <Button className={classes.button} onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle className={classes.icon} />
            </Button>
        </Box>
    );
}

export default BackToTop;
