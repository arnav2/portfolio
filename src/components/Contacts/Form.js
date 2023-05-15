import React, {useState, useContext} from 'react'
import { Snackbar, IconButton, SnackbarContent, FormControl, Typography, TextField, Input, Button, Box } from '@mui/material';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { makeStyles } from '@mui/styles';
import { contactsData } from '../../data/contactsData';
import { ThemeContext } from '../../contexts/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';

const Form = () => {

    const { theme } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
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

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
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
            flex: 0.4,
            width: '100%'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            width: '100%'
        },
        inputContainer: {
            width: '100%'
        },
        input: {
            height: '50px',
            boxSizing: 'border-box',
            borderRadius: '50px',
            outline: 'none',
            marginBottom: '2rem',
            padding: '0.7rem 0.7rem',
            width: '100%',
            resize: 'none',
            border: `4px solid ${theme.primary80}`,
            backgroundColor: theme.secondary,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
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
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
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
    }))

    const classes = useStyles();

    return (
        <Box className={classes.contactsForm}>
            <FormControl onSubmit={handleContactForm} classes={classes.form}>
                <TextField className={classes.inputContainer} label="Name">
                    <Input
                        placeholder='John Doe'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        name='Name'
                        className={classes.input}
                    />
                </TextField>
                <TextField className={classes.inputContainer} label="Email">
                    <Input
                        placeholder='John@doe.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        name='Email'
                        className={classes.input}
                    />
                </TextField>
                <TextField 
                    className={classes.inputContainer} 
                    label="Message" 
                    multiline 
                    placeholder='Type your message....'/>

                <Box className='submit-btn'>
                    <Button
                        type='submit'
                        className={classes.submitBtn}
                    >
                        <Typography>{!success ? 'Send' : 'Sent'}</Typography>
                        <Box className='submit-icon'>
                            <AiOutlineSend
                                className='send-icon'
                                style={{
                                    animation: !success
                                        ? 'initial'
                                        : 'fly 0.8s linear both',
                                    position: success
                                        ? 'absolute'
                                        : 'initial',
                                }}
                            />
                            <AiOutlineCheckCircle
                                className='success-icon'
                                style={{
                                    display: !success
                                        ? 'none'
                                        : 'inline-flex',
                                    opacity: !success ? '0' : '1',
                                }}
                            />
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