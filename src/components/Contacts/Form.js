import React, {useState, useContext, useEffect} from 'react'
import { Snackbar, IconButton, SnackbarContent, FormControl, Typography, TextareaAutosize, Button, Box } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { makeStyles } from '@mui/styles';
import { contactsData } from '../../data/contactsData';
import { ThemeContext } from '../../contexts/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import MyTextField from './MyTextField';


const StyledTextArea = styled(TextareaAutosize)(({ inputTheme }) =>
{   
    return ({
        height: '150px',
        boxSizing: 'border-box',
        borderRadius: '20px', 
        outline: 'none',
        marginBottom: '2rem',
        padding: '0.7rem 0.7rem',
        width: '100%',
        resize: 'none',
        fontFamily: 'var(--primaryFont)',
        fontSize: '0.875rem',
        fontWeight: 500,
        transition: 'border 0.2s ease-in-out',
        border: `4px solid ${inputTheme.primary80}`,
        backgroundColor: inputTheme.secondary,
        color: inputTheme.tertiary,
        '&:focus': {
            border: `4px solid ${inputTheme.primary600}`,
        },
    
        // firefox
        '&:focus-visible': {
            outline: 0
        }
    })
});

const Form = () => {

    const { theme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('test name');
    const [email, setEmail] = useState('test@example.com');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {

        console.log(name)
        console.log(email)
        console.log(message)
        console.log(success)

    }, [name, email, message, success])

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');
                    setTimeout(() => {
                        console.log('In the set timeout function')
                        setName('test name');
                        setEmail('test@example.com');
                        setMessage('');
                        setOpen(false);
                        setSuccess(false);
                    }, 1000);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter name and email fields');
            setOpen(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        contactsForm: {
            display: 'flex',
            flex: '0.4 1',
            width: '100%'
        },
        input: {
            width: '100%',
            height: '50px',
            boxSizing: 'border-box',
            borderRadius: '50px',
            outline: 'none',
            marginBottom: '2rem',
            padding: '0.7rem 0.7rem',
            resize: 'none',
            border: `4px solid ${theme.primary80}`,
            backgroundColor: theme.secondary,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        message: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
        },
        submitBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        submitIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px'
        },
        sendIcon: {
            fontSize: '25px',
            transformOrigin: 'center',
            transform: 'translate(5px,-3px) rotate(-30deg)'
        },
        successIcon: {
            fontSize: '28px',
            transition: 'all 0.3s 0.8s ease-in-out'
        }
    }))

    const classes = useStyles();

    return (
        <Box className={classes.contactsForm}>
            <FormControl onSubmit={handleContactForm}  
            sx={{   
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                justifyContent: 'space-evenly'
            }}>
                <MyTextField 
                    props={{
                        value: 'Name',
                        setFunc: setName,
                        type: 'name',
                        name: 'Name',
                        defaultValue: "test name"
                    }}
                />
                <MyTextField 
                    props={{
                        value: 'Email',
                        setFunc: setEmail,
                        type: 'email',
                        name: 'Email',
                        defaultValue: "test@example.com"
                    }}
                />
                <StyledTextArea
                    minRows={6}
                    maxRows={10}
                    inputTheme={theme}
                    label="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Type your message....'/>

                <Box className={classes.submitBtn}>
                    <Button
                        type='submit'
                        className={classes.submitBtn}
                        onClick={handleContactForm}
                    >
                        <Typography>{!success ? 'Send ' : 'Sent '}</Typography>
                        <Box className={classes.submitIcon}>
                            {!success && <SendOutlinedIcon
                                className={classes.sendIcon}
                            />}

                            {success && <CheckCircleOutlineOutlinedIcon
                                className={classes.successIcon}
                                sx={{
                                    display: !success
                                        ? 'none'
                                        : 'inline-flex',
                                    opacity: !success ? '0' : '1',
                                }}
                            />}
                        </Box>
                    </Button>
                </Box>
            </FormControl>
            <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
        >
            <SnackbarContent
                action={
                    <React.Fragment>
                        <IconButton
                            size='small'
                            aria-label='close'
                            color='inherit'
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    </React.Fragment>
                }
                style={{
                    backgroundColor: theme.primary,
                    color: theme.secondary,
                    fontFamily: 'var(--primaryFont)',
                }}
                message={errMsg}
            />
        </Snackbar>
    </Box>
    )
}

export default Form