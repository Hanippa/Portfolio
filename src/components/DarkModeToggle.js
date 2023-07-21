import React, { useState , useEffect } from 'react';
import dark_mode from '../images/dark_mode.svg'
import light_mode from '../images/light_mode.svg'

const DarkModeToggle = () => {
  const prefersDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedMode ? JSON.parse(storedMode) : prefersDarkTheme);
    useEffect(() => {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        const body = document.body;
        if (isDarkMode) {
          body.classList.add('dark-mode');
        } else {
          body.classList.remove('dark-mode');
        }
      }, [isDarkMode]);

      useEffect(() => {
        const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
          setIsDarkMode(e.matches);
        };
        systemDarkMode.addEventListener('change', handleChange);
        return () => systemDarkMode.removeEventListener('change', handleChange);
      }, []);


  const handleDarkModeToggle = () => {
    setIsDarkMode((prevState) => !prevState);
    console.log(isDarkMode);
    // Here you can add additional logic to store the user's preference in local storage or a state management solution
  };

  return (
    <div className="dark-mode-toggle">
      <button className='dark-mode-button' onClick={handleDarkModeToggle}>
        {isDarkMode ? <img className='light-mode-logo' src={light_mode} alt='light mode logo'/> : <img className='dark-mode-logo' src={dark_mode} alt='dark mode logo'/>}
      </button>
    </div>
  );
};

export default DarkModeToggle;