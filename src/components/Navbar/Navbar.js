import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Box, Typography } from '@mui/material';

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
            userSelect: 'none'
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
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [t.breakpoints.down('sm')]: {
                width: '12em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.primary,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 25px',
                height: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
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
            
        </Box>
    );
}

export default Navbar;
