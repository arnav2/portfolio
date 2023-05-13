import React, { createContext, useState } from 'react'

/* eslint-disable */
import { 
    orangeThemeLight, 
    orangeThemeDark
} from '../theme'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(orangeThemeDark)

    const toggleContextTheme = () => {
        if (theme === orangeThemeDark) {
            setTheme(orangeThemeLight)
        } else {
            setTheme(orangeThemeDark)
        }
    }

    return (
        <ThemeContext.Provider value={{theme, toggleContextTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider