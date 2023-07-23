import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const updatedDarkMode = !darkMode;
        setDarkMode(updatedDarkMode);
        localStorage.setItem('darkMode', updatedDarkMode);
        if (updatedDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button
            className="fixed bottom-5 right-5 z-50 bg-gray-200 dark:bg-gray-800 rounded-full p-2 shadow-lg"
            onClick={toggleDarkMode}
        >
            {darkMode ? (
                <FaSun className="h-6 w-6 text-yellow-500" />
            ) : (
                <FaMoon className="h-6 w-6 text-gray-500" />
            )}
        </button>
    );
};

export default DarkModeToggle;
