import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaBloggerB,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
} from 'react-icons/fa';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import { Box, Link, Typography } from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContext';

const ContactIcons = () => {
    const { theme } = useContext(ThemeContext);
    const useStyles = makeStyles((t) => (
        {
            contactDetails: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-evenly',
                flex: '0.6',
                boxSizing: 'border-box',
                paddingLeft: '7rem',
                marginTop: '1.2rem'
            },
            socialIcon: {
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '21px',
                backgroundColor: theme.primary,
                color: theme.secondary,
                transition: '250ms ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1)',
                    color: theme.secondary,
                    backgroundColor: theme.tertiary,
                },
            },
            detailsIcon: {
                backgroundColor: theme.primary,
                color: theme.secondary,
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '23px',
                transition: '250ms ease-in-out',
                flexShrink: 0,
                '&:hover': {
                    transform: 'scale(1.1)',
                    color: theme.secondary,
                    backgroundColor: theme.tertiary,
                },
            },
            personalDetails: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                marginBottom: '2.5rem',
            },
            personalDeatilsText: {
                marginLeft: '1.5rem',
                fontSize: '18px',
                lineHeight:'110%',
                fontWeight: 500,
                fontFamily: 'var(--primaryFont)',
                width: '45%',
                wordBreak: 'break-word',
                color: theme.tertiary
            },
            socialMediaIcons: {
                width: '90%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '4rem'
            },

        }
    ))

    const classes = useStyles();
    
    return (
        <Box className={classes.contactDetails}>
        <Link
            href={`mailto:${contactsData.email}`}
            className={classes.personalDetails}
        >
            <Box className={classes.detailsIcon}>
                <FiAtSign />
            </Box>
            <Typography variant='p' className={classes.personalDeatilsText}>
                {contactsData.email}
            </Typography>
        </Link>
        <Link
            href={`tel:${contactsData.phone}`}
            className={classes.personalDetails}
        >
            <Box className={classes.detailsIcon}>
                <FiPhone />
            </Box>
            <Typography variant='p' className={classes.personalDeatilsText}>
                {contactsData.phone}
            </Typography>
        </Link>
        <Box className={classes.personalDetails}>
            <Box className={classes.detailsIcon}>
                <HiOutlineLocationMarker />
            </Box>
            <Typography variant='p' className={classes.personalDeatilsText}>
                {contactsData.address}
            </Typography>
        </Box>

        <Box className={classes.socialMediaIcons}>
            {socialsData.twitter && (
                <Link
                    href={socialsData.twitter}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaTwitter aria-label='Twitter' />
                </Link>
            )}
            {socialsData.github && (
                <Link
                    href={socialsData.github}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaGithub aria-label='GitHub' />
                </Link>
            )}
            {socialsData.linkedIn && (
                <Link
                    href={socialsData.linkedIn}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaLinkedinIn aria-label='LinkedIn' />
                </Link>
            )}
            {socialsData.instagram && (
                <Link
                    href={socialsData.instagram}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaInstagram aria-label='Instagram' />
                </Link>
            )}
            {socialsData.medium && (
                <Link
                    href={socialsData.medium}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaMediumM aria-label='Medium' />
                </Link>
            )}
            {socialsData.blogger && (
                <Link
                    href={socialsData.blogger}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaBloggerB aria-label='Blogger' />
                </Link>
            )}
            {socialsData.youtube && (
                <Link
                    href={socialsData.youtube}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaYoutube aria-label='YouTube' />
                </Link>
            )}
            {socialsData.reddit && (
                <Link
                    href={socialsData.reddit}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaRedditAlien aria-label='Reddit' />
                </Link>
            )}
            {socialsData.stackOverflow && (
                <Link
                    href={socialsData.stackOverflow}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaStackOverflow aria-label='Stack Overflow' />
                </Link>
            )}
            {socialsData.codepen && (
                <Link
                    href={socialsData.codepen}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaCodepen aria-label='CodePen' />
                </Link>
            )}
            {socialsData.gitlab && (
                <Link
                    href={socialsData.gitlab}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaGitlab aria-label='GitLab' />
                </Link>
            )}
        </Box>
    </Box>
  )
}

export default ContactIcons