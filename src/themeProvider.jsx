import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const reduxState = useSelector(state => state);

    useEffect(() => {
        if (reduxState) {
            setTheme(reduxState?.theme?.theme);
        }
    }, [reduxState])

    const themeVariables = {
        light: {
            primaryColor: "#ffffff",
            secondaryColor: "#272727"
        },
        dark: {
            primaryColor: "#272727",
            secondaryColor: "#ffffff"
        }
    }

    const rootStyle = {
        '--primary-color': themeVariables[theme].primaryColor,
        '--secondary-color': themeVariables[theme].secondaryColor,
    }

    return (
        <div style={rootStyle}>{children}</div>
    )
}

export default ThemeProvider