import React, { useContext } from 'react'
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import MenuLinks from './MenuLinks';
import { ThemeContext } from '../../contexts/ThemeContext';

const MyDrawer = () => {
    const { toggleDrawer } = useContext(ThemeContext);

    const handleDrawerClose = () => {
        toggleDrawer();
    };
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
        open={open}
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