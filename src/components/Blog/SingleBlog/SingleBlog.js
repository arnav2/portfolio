import React from 'react'
import Fade from 'react-reveal/Fade';


import placeholder from '../../../assets/placeholder.jpg'
import { makeStyles } from '@mui/styles';
import { Box, Link, Typography } from '@mui/material';

function SingleBlog({ theme, title, desc, date, image, url, id }) {

    const useStyles = makeStyles((theme) => ({
        singleBlog: {
            height: '420px',
            width: '320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'baseline',
            borderRadius: '5px',
            "&:hover": {
                filter: 'grayscale(0)',
                transform: 'scale(1.1)',
            },
        },
        imageDiv: {
            height: '50%',
            width: '100%',
            overflow: 'hidden',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            backgroundColor: theme.secondary
        },
        image: {
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            transition: 'transform 1s, filter 2s ease-in-out',
            filter: 'blur(1px)',
            transform: 'scale(1.3)',
            "&:hover": {
                filter: 'grayscale(0)',
                transform: 'scale(1.1)',
            },
            
        },
        blogBody: {
            padding: '1rem',
        },
        blogTitle: {
            fontFamily: 'var(--primaryFont)',
            marginBottom: '0.55rem',
            fontSize: '19px',
            lineHeight: '115%',
            color: theme.secondary
        },
        blogDescription: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '15px',
            lineHeight: '139%',
            fontWeight: 500,
            opacity: 0.9,
        }
    }))

    const classes = useStyles();

    return (
        <Fade bottom>
            <Link className={classes.singleBlog} key={id} href={url} underline="none" target="_blank" rel="noreferrer" style={{backgroundColor: theme.primary400}}>
                <Box className={classes.imageDiv} style={{backgroundColor: theme.secondary}}>
                    <img src={image ? image : placeholder} className={classes.image} alt={title} />
                </Box>
                <Box className={classes.blogBody}>
                    <Typography style={{color: theme.tertiary}}>{date}</Typography>
                    <Typography variant='h3' className={classes.blogTitle} style={{color: theme.secondary}}>{title}</Typography>
                    <Typography variant='h6' className={classes.blogDescription} style={{color: theme.secondary}}>{desc}</Typography>
                </Box>
            </Link>
        </Fade>
    )
}

export default SingleBlog
