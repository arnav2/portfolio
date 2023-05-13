import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@mui/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Image from './Image';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import { LinkedIn, GitHub, Twitter, Newspaper } from '@mui/icons-material';

function Home() {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => (
        {
        landing: {
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        landingContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            height: '100%',
        },
        landingImage: {
            imgSize: '400px',
            position: 'absolute',
            left: '35%',
            transform: 'translateX(-50%)',
            width: 'var(--img-size)',
            height: 'var(--img-size)',
            objectFit: 'cover',
            borderRadius: '50%',
            boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
            transition: 'opacity 0.3s'
        },
        leftLandingContainer: {
            flex: '35%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundColor: theme.primary,
        },
        leftContainerContent: {
            margin: '3rem',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        homeSocial: {
            fontSize: '35px',
            margin: '0 1rem',
            transition: 'transform 0.5s',
            color: theme.secondary,
            '&:hover': {
                transform: 'scale(1.2)'
            }
        },
        rightLandingContainer: {
            flex: '65%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
            backgroundColor: theme.secondary
        },
        rightContainerContent: {
            width: '45%',
            marginRight: '7rem',
            fontFamily: 'var(--primaryFont)',
            fontStyle: 'normal',
            color: theme.tertiary
        },
        buttonContainer: {
            marginTop: '2rem',
            width: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // font-family: `"var(--primaryFont)", sans-serif`
        },
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles()

    return (
        <Box>
            <Box className={classes.landing}>
                <Box className={classes.landingContainer}>
                    <Box className={classes.leftLandingContainer} sx={{ backgroundColor: theme.primary }}>
                        <Box className={classes.leftContainerContent}>
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <LinkedIn
                                        className= {classes.homeSocial}
                                        aria-label='LinkedIn'
                                    />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <GitHub
                                        className= {classes.homeSocial}
                                        aria-label='GitHub'
                                    />
                                </a>
                            )}
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Twitter className= {classes.homeSocial} aria-label='Twitter'
                                    />
                                </a>
                            )}
                            {socialsData.blogger && (
                                <a
                                    href={socialsData.blogger}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Newspaper
                                        className= {classes.homeSocial}
                                        aria-label='Blogger'
                                    />
                                </a>
                            )}
                        </Box>
                    </Box>
                    <Image />
                    <Box className={classes.rightLandingContainer}>
                        <Box className={classes.rightContainerContent}>
                            <h6>{headerData.title}</h6>
                            <h1>{headerData.name}</h1>
                            <p>{headerData.desciption}</p>

                            <div className='lcr-buttonContainer'>
                                {headerData.resumePdf && (
                                    <a
                                        href={headerData.resumePdf}
                                        download='resume'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <Button className={classes.resumeBtn}>
                                            Download CV
                                        </Button>
                                    </a>
                                )}
                                <NavLink
                                    to='/#contacts'
                                    smooth={true}
                                    spy='true'
                                    duration={2000}
                                >
                                    <Button className={classes.contactBtn}>
                                        Contact
                                    </Button>
                                </NavLink>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
