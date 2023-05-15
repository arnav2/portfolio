import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Link } from '@mui/material';
import { socialsData } from '../../data/socialsData';
import { LinkedIn, GitHub, Twitter, Newspaper } from '@mui/icons-material';
import { ThemeContext } from '../../contexts/ThemeContext';

const LeftLandingContainer = () => {
    const { theme } = useContext(ThemeContext);
    const useStyles = makeStyles((t) => (
        {
        leftLandingContainer: {
            flex: '35%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundColor: theme.primary,
            [t.breakpoints.down['sm']]: {
                flex: 'initial',
                width: '100%',
                height: '30%'
            }
        },
        leftContainerContent: {
            margin: '3rem',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            [t.breakpoints.down('lg')]: {
                margin: '2rem'
            }
        },
        homeSocial: {
            fontSize: '35px',
            margin: '0 1rem',
            transition: 'transform 0.5s',
            color: theme.secondary,
            '&:hover': {
                transform: 'scale(1.2)'
            },
            [t.breakpoints.down('md')]: {
                fontSize: '30px'
            },
            [t.breakpoints.down['sm']]: {
                display: 'none'
            }
        }
    }))
    const classes = useStyles()
    
    return (
        <Box className={classes.leftLandingContainer} sx={{ backgroundColor: theme.primary }}>
            <Box className={classes.leftContainerContent}>
                {socialsData.linkedIn && (
                    <Link
                        href={socialsData.linkedIn}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <LinkedIn
                            className= {classes.homeSocial}
                            aria-label='LinkedIn'
                        />
                    </Link>
                )}
                {socialsData.github && (
                    <Link
                        href={socialsData.github}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <GitHub
                            className= {classes.homeSocial}
                            aria-label='GitHub'
                        />
                    </Link>
                )}
                {socialsData.twitter && (
                    <Link
                        href={socialsData.twitter}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Twitter className= {classes.homeSocial} aria-label='Twitter'
                        />
                    </Link>
                )}
                {socialsData.blogger && (
                    <Link
                        href={socialsData.blogger}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Newspaper
                            className= {classes.homeSocial}
                            aria-label='Blogger'
                        />
                    </Link>
                )}
            </Box>
        </Box>
  )
}

export default LeftLandingContainer