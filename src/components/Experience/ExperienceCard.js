import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/orangeImages/svg/expImgWhite.svg'
import expImgBlack from '../../assets/orangeImages/svg/expImgBlack.svg'

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
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
