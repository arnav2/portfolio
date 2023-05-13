import React from 'react'
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

const ContactIcons = () => {
    const classes = useStyles();
    return (
        <div className='contacts-details'>
        <a
            href={`mailto:${contactsData.email}`}
            className='personal-details'
        >
            <div className={classes.detailsIcon}>
                <FiAtSign />
            </div>
            <p style={{ color: theme.tertiary }}>
                {contactsData.email}
            </p>
        </a>
        <a
            href={`tel:${contactsData.phone}`}
            className='personal-details'
        >
            <div className={classes.detailsIcon}>
                <FiPhone />
            </div>
            <p style={{ color: theme.tertiary }}>
                {contactsData.phone}
            </p>
        </a>
        <div className='personal-details'>
            <div className={classes.detailsIcon}>
                <HiOutlineLocationMarker />
            </div>
            <p style={{ color: theme.tertiary }}>
                {contactsData.address}
            </p>
        </div>

        <div className='socialmedia-icons'>
            {socialsData.twitter && (
                <a
                    href={socialsData.twitter}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaTwitter aria-label='Twitter' />
                </a>
            )}
            {socialsData.github && (
                <a
                    href={socialsData.github}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaGithub aria-label='GitHub' />
                </a>
            )}
            {socialsData.linkedIn && (
                <a
                    href={socialsData.linkedIn}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaLinkedinIn aria-label='LinkedIn' />
                </a>
            )}
            {socialsData.instagram && (
                <a
                    href={socialsData.instagram}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaInstagram aria-label='Instagram' />
                </a>
            )}
            {socialsData.medium && (
                <a
                    href={socialsData.medium}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaMediumM aria-label='Medium' />
                </a>
            )}
            {socialsData.blogger && (
                <a
                    href={socialsData.blogger}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaBloggerB aria-label='Blogger' />
                </a>
            )}
            {socialsData.youtube && (
                <a
                    href={socialsData.youtube}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaYoutube aria-label='YouTube' />
                </a>
            )}
            {socialsData.reddit && (
                <a
                    href={socialsData.reddit}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaRedditAlien aria-label='Reddit' />
                </a>
            )}
            {socialsData.stackOverflow && (
                <a
                    href={socialsData.stackOverflow}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaStackOverflow aria-label='Stack Overflow' />
                </a>
            )}
            {socialsData.codepen && (
                <a
                    href={socialsData.codepen}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaCodepen aria-label='CodePen' />
                </a>
            )}
            {socialsData.gitlab && (
                <a
                    href={socialsData.gitlab}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <FaGitlab aria-label='GitLab' />
                </a>
            )}
        </div>
    </div>
  )
}

export default ContactIcons