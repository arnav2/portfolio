import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/eduImgWhite.svg'
import eduImgBlack from '../../assets/eduImgBlack.svg'
import { Box, Typography } from '@mui/material';

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            display:'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '90%',
            height: '140px',
            padding: '1.5rem',
            borderRadius: '20px',
            marginBottom: '1.5rem',
            transition: 'background-color 200ms ease-in-out',
            backgroundColor:theme.primary50,
            "&:hover": {
                backgroundColor:theme.primary80,
                transform: 'scale(1.05)'
            },
        },
        educationCardImage: {
            borderRadius: '50%',
            width: '55px',
            height: '55px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            backgroundColor: theme.primary
        },
        educationCardCourse: {
            color: theme.primary400,
            fontFamily: 'var(--primaryFont)',
            fontSize: '1.225rem',
            fontWeight: 700
        },
        educationCardDate: {
            fontFamily: 'var(--primaryFont)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
        },
        educationCardInstitution: {
            fontFamily: 'var(--primaryFont)',
            fontSize: '1.15rem',
            fontWeight: 600
        },
    }));

    const classes = useStyles();

    return (
        <Box key={id} className={classes.educationCard} >
            <Fade bottom className={classes.educationCard} >
                <Box className={classes.educationCardImage}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </Box>
                <Box sx={{marginLeft: '0.6rem'}}>
                <Typography variant='h3' className={classes.educationCardCourse}>{course}</Typography>
                    <Typography variant='h6' className={classes.educationCardDate}>{startYear}-{endYear}</Typography>
                    <Typography variant='h4' className={classes.educationCardInstitution}>{institution}</Typography>                    
                </Box>
            </Fade>
        </Box>
    )
}

export default EducationCard
