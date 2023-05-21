import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Box, Typography } from '@mui/material';
import MyDrawer from './MyDrawer';

function Navbar() {
    const { theme, toggleDrawer } = useContext(ThemeContext);

    const handleDrawerOpen = () => {
        toggleDrawer();
    };

    const useStyles = makeStyles((t) => ({
        navBar: {
            height: '6.5rem',
            position: 'absolute',
            backgroundColor: 'transparent',
            zIndex: '99',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        navContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 3rem',
            marginTop: '1rem',
        },
        header: {
            fontFamily: 'BestermindRegular',
            color: theme.tertiary,
            fontSize: '3.5rem',
            userSelect: 'none',
            [t.breakpoints.down('md')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2rem',
            },
        },
        navMenu: {
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.primary,
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '2rem',
            },
        }
    }));

    const classes = useStyles();

    return (
        <Box className= {classes.navBar}>
            <Box className={classes.navContainer}>
                <Typography variant='h1' className={classes.header}>
                    {headerData.name}
                </Typography>

                <MenuIcon
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </Box>
            <MyDrawer />
        </Box>
    );
}

export default Navbar;
