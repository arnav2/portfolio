import React, {useContext} from 'react'
import { Box } from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContext';
import MuiButton from "@mui/material/Button";
import styled from "styled-components";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { headerData } from '../../data/headerData';

const Button = styled(MuiButton)(({ inputTheme }) => 
{   
    return ({
        backgroundColor: inputTheme.primary,
        color: inputTheme.tertiary,
        borderRadius: '30px',
        textTransform: 'inherit',
        textDecoration: 'none',
        width: '150px',
        height: '50px',
        fontSize: '1rem',
        fontWeight: '500',
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${inputTheme.primary}`,
        transition: '100ms ease-out',
        '&:hover': {
            backgroundColor: inputTheme.secondary,
            color: inputTheme.tertiary,
            border: `3px solid ${inputTheme.tertiary}`,
        },
    })
})

const ButtonContainer = styled(Box)(() => ({
    marginTop: '2rem',
    width: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: `"var(--primaryFont)", sans-serif`
}))

const Buttons = () => {
    const {theme} = useContext(ThemeContext)
    console.log(theme)
    
    return (
        <ButtonContainer>
                        {headerData.resumePdf && (
                            <a
                                href={headerData.resumePdf}
                                download='resume'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Button inputTheme={theme}>
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
                            <Button inputTheme={theme}>
                                Contact
                            </Button>
                        </NavLink>
        </ButtonContainer>
  )
}

export default Buttons