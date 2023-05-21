import React, {useContext} from 'react'
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';

const StyledTextField = styled(TextField)(({ inputTheme }) =>
{
    return ({
        width: '100%',
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
            border: 0
            }
        }
    })
})

const MyTextField = ({props}) => {

    const { theme } = useContext(ThemeContext);
    
    const useStyles = makeStyles((t) => ({
        input: {
            width: '100%',
            height: '50px',
            boxSizing: 'border-box',
            borderRadius: '50px',
            outline: 'none',
            marginBottom: '2rem',
            resize: 'none',
            backgroundColor: theme.secondary,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            position: 'relative',
            border: `4px solid ${theme.primary80}`,
            
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            '&.MuiFormLabel-root': {
                backgroundColor: `${theme.secondary}`,
                color: `${theme.primary}`,
                fontFamily: 'var(--primaryFont)',
                fontWeight: 600,
                fontSize: '0.9rem',
            }
        }
    }))
    const classes = useStyles();
    return (
        <StyledTextField
            inputTheme={theme}
            required
            multiline={props.multiline}c
            label={props.value}
            placeholder={props.placeholder}
            variant="outlined"
            onChange={(e) => {props.setFunc(e.target.value)}}
            defaultValue={props.defaultValue}
            type={props.type}
            name={props.name}
            InputProps={{
                className: classes.input,
            }}
            InputLabelProps={{
                className: classes.label
            }}
        />
    )
}

export default MyTextField