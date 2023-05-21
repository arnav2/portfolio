import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/orangeImages/svg/expImgWhite.svg'
import expImgBlack from '../../assets/orangeImages/svg/expImgBlack.svg'
import { Box, Typography } from '@mui/material';

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
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
        experienceCardImage: {
            borderRadius: '50%',
            width: '55px',
            height: '55px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            backgroundColor: theme.primary
        },
        experienceCardCompany: {
            color: theme.primary400,
            fontFamily: 'var(--primaryFont)',
            fontSize: '1.225rem',
            fontWeight: 700
        },
        experienceCardDate: {
            fontFamily: 'var(--primaryFont)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
        },
        experienceCardJob: {
            fontFamily: 'var(--primaryFont)',
            fontSize: '1.15rem',
            fontWeight: 600
        },
        
    }));

    const classes = useStyles();

    return (
        <Box key={id} className={classes.experienceCard}>
            <Fade bottom className={classes.experienceCard} >
            
                <Box className={classes.experienceCardImage}>
                    <img width="36px" pointerEvents="none" src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </Box>
                <Box sx={{ marginLeft: '0.6rem'}}>
                    
                    <Typography variant='h3' className={classes.experienceCardCompany}>{company}</Typography>
                    <Typography variant='h6' className={classes.experienceCardDate}>{startYear}-{endYear}</Typography>
                    <Typography variant='h4' className={classes.experienceCardJob}>{jobtitle}</Typography>
                </Box>
            </Fade>   
        </Box>
    )
}

export default ExperienceCard
