import React, { useContext } from 'react'
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import MenuLinks from './MenuLinks';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Box } from '@mui/material';

const MyDrawer = () => {
    const { theme, toggleDrawer, drawerOpen } = useContext(ThemeContext);
    const handleDrawerClose = () => {
        toggleDrawer();
    };

    const useStyles = makeStyles((t) => ({
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
    }))

    const classes = useStyles();

    return (
    <Drawer
        variant='temporary'
        onClose={(event, reason) => {
            if (reason !== 'backdropClick') {
                handleDrawerClose();
            } else if (reason !== 'escapeKeyDown') {
                handleDrawerClose();
            }
        }}
        anchor='left'
        open={drawerOpen}
        classes={{ paper: classes.MuiDrawer }}
        className='drawer'
        disableScrollLock={true}
    >
        <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleDrawerClose();
                }
            }}
            className={classes.closebtnIcon}
            role='button'
            tabIndex='0'
            aria-label='Close'
        />
        <br />

        <Box onClick={handleDrawerClose}>
            <MenuLinks />
        </Box>
    </Drawer>
    )
}

export default MyDrawer