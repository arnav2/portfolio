import React, {useContext} from 'react'
import { Box } from '@mui/material'
import Fade from 'react-reveal/Fade';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';
import { IoHomeSharp } from 'react-icons/io5';
import { makeStyles } from '@mui/styles';

const MenuLinks = () => {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.primary,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 25px',
                height: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
    }))

    const classes = useStyles();

    return (
        <Box sx={{marginTop: '5rem'}}>
            <Fade left>
                <NavLink
                    to='/'
                    smooth={true}
                    spy='true'
                    duration={2000}
                >
                    <Box className={classes.drawerItem}>
                        <IoHomeSharp className={classes.drawerIcon} />
                        <span className={classes.drawerLinks}> Home </span>
                    </Box>
                </NavLink>
            </Fade>

            <Fade left>
                <NavLink
                    to='/#about'
                    smooth={true}
                    spy='true'
                    duration={2000}
                >
                    <Box className={classes.drawerItem}>
                        <FaUser className={classes.drawerIcon} />
                        <span className={classes.drawerLinks}>
                            About
                        </span>
                    </Box>
                </NavLink>
            </Fade>

            <Fade left>
                <NavLink
                    to='/#skills'
                    smooth={true}
                    spy='true'
                    duration={2000}
                >
                    <Box className={classes.drawerItem}>
                        <HiDocumentText
                            className={classes.drawerIcon}
                        />
                        <span className={classes.drawerLinks}>
                            Skills
                        </span>
                    </Box>
                </NavLink>
            </Fade>

            <Fade left>
                <NavLink
                    to='/#experiences'
                    smooth={true}
                    spy='true'
                    duration={2000}
                >
                    <Box className={classes.drawerItem}>
                        <BsFillGearFill
                            className={classes.drawerIcon}
                        />
                        <span className={classes.drawerLinks}>
                            Experiences
                        </span>
                    </Box>
                </NavLink>
            </Fade>

            <Fade left>
                <NavLink
                    to='/#blog'
                    smooth={true}
                    spy='true'
                    duration={2000}
                >
                    <Box className={classes.drawerItem}>
                        <FaFolderOpen
                            className={classes.drawerIcon}
                        />
                        <span className={classes.drawerLinks}>
                            Blogs
                        </span>
                    </Box>
                </NavLink>
            </Fade>

            <Fade left>
                <NavLink
                    to='/#contacts'
                    smooth={true}
                    spy='true'
                    duration={2000}
                >
                    <Box className={classes.drawerItem}>
                        <MdPhone className={classes.drawerIcon} />
                        <span className={classes.drawerLinks}>
                            Contact
                        </span>
                    </Box>
                </NavLink>
            </Fade>
    </Box>
  )
}

export default MenuLinks