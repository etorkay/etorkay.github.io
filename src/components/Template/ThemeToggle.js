import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    // Track theme state
    const [theme, setTheme] = useState('light');

    // On mount, load theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    // Toggle theme handler
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="theme-switch">
            <input
                type="checkbox"
                id="theme-toggle"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <label htmlFor="theme-toggle" className="switch">
                <span className="knob">
                    <span className="icon sun">☀️</span>
                    <span className="icon moon">🌙</span>
                </span>
            </label>
        </div>
    );
};

export default ThemeToggle;
