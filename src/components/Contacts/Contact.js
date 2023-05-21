import React, { useContext, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import ContactIcons from './ContactIcons';
import Form from './Form';

function Contacts() {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        contacts: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            position: 'relative',
            backgroundColor: theme.secondary
        },
        contactsContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '2rem 6rem 3rem',
            width: '80%',
            height: '100%',
            marginTop: '2rem'
        },
        header: {
            fontFamily: 'var(--primaryFont)',
            fontSize: '3.5rem',
            marginBottom: '2.5rem',
            color: theme.primary,
            fontWeight: 'bold',
        },
        contactsBody: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%'
        },
        contactsImage: {
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '280px',
            pointerEvents: 'none'
        }
    }));

    const classes = useStyles();

    return (
        <Box className= {classes.contacts} id='contacts'>
            <Box className={classes.contactsContainer}>
                <Typography variant="h1" gutterBottom className={classes.header}>Contacts</Typography>
                <Box className={classes.contactsBody}>
                    <Form />
                    <ContactIcons />
                </Box>
            </Box>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className={classes.contactsImage}
            />
        </Box>
    );
}

export default Contacts;
