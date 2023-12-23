import React, { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import {useDispatch} from 'react-redux';
import { updateTheme } from './redux/actions/theme';
import "./App.css";

function Toggle() {
    const [isDarkMode, setDarkMode] = useState(false);
    const dispatch = useDispatch();
    const toggle = () => {
        setDarkMode(!isDarkMode);
        dispatch(updateTheme(isDarkMode ? 'dark' : 'light'));
    }
    return (
        <div style={{ marginTop: "1rem" }}>
            {!isDarkMode ? <FaSun onClick={toggle} className='icon' />
                : <FaMoon onClick={toggle} className='icon' />}
        </div>
    )
}
export default Toggle;