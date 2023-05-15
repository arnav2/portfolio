import React, { useContext } from 'react'
import { FormGroup, FormControlLabel, Switch, Box } from "@mui/material";
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';

const ToggleSwitch = () => {
    
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    
    return (
      // ToggleSwitch component
        <Box
            sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            }}
        >
            <FormGroup>
                <FormControlLabel
                    control={
                    <Switch
                        checked={theme}
                    />
                    }
                    label="Toggle Mode"
                />
            </FormGroup>
        </Box>
    );
};

export default ToggleSwitch