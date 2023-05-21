import React, {useContext} from 'react'
import { makeStyles } from '@mui/styles';
import Marquee from "react-fast-marquee";
import { Box, Typography } from '@mui/material';

import {skillsData} from '../../data/skillsData'
import { ThemeContext } from '../../contexts/ThemeContext';
import {skillsImage} from '../../utils/skillsImage';

const MyMarquee = () => {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        skillsContainer:  {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginTop: '3.5rem',
            padding: '0 2rem'
        },
        skillsScroll: {
            width: '100%',
            margin: '0 2rem'
        },
        skillsBox: {
            background: '#FAFAFA',
            boxShadow: `0px 0px 30px ${theme.primary30}`,
            borderRadius: '10px',
            width: '160px',
            height: '160px',
            margin: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            transition: '300ms ease-in-out',
            backgroundColor: theme.secondary,
        },
        skillsText: {
            fontFamily: 'Big Shoulders Text',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '22px',
            textAlign: 'center',
            marginTop: '1rem',
            color: theme.tertiary
        }

    }))
    const classes = useStyles();
    return (
        <Box className={classes.skillsContainer}>
            <Box className={classes.skillsScroll}>
                <Marquee 
                    gradient={false} 
                    speed={80} 
                    pauseOnHover={true}
                    pauseOnClick={true} 
                    delay={0}
                    play={true} 
                    direction="left"
                    padding="3rem 0"
                >
                    {skillsData.map((skill, id) => (
                        <Box className={classes.skillsBox} key={id}>
                            <img src={skillsImage(skill)} alt={skill}  height='50px' pointerEvents='none'/>
                            <Typography variant='h3' className={classes.skillsText}>
                                {skill}
                            </Typography>
                        </Box>
                    ))}
                </Marquee>
            </Box>
        </Box>
    )
}

export default MyMarquee