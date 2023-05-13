import React from 'react'
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "../../redux/theme/themeSlice";

const ToggleSwitch = () => {
    
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    
    return (
      // ToggleSwitch component
        <div
            style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            }}
        >
            <FormGroup>
                <FormControlLabel
                    control={
                    <Switch
                        checked={theme.darkTheme}
                        onChange={() => dispatch(toggleTheme())}
                    />
                    }
                    label="Toggle Mode"
                />
            </FormGroup>
        </div>
    );
};

export default ToggleSwitch