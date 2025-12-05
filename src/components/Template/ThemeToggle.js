
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    // Track theme state
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme;
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        }
        return 'light';
    });

    // On mount, ensure attributes are consistent (though index.html handles this too)
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.backgroundColor = theme === 'dark' ? '#1e1e1e' : '#f4f4f4';
    }, [theme]);

    // Toggle theme handler
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        document.documentElement.style.backgroundColor = newTheme === 'dark' ? '#1e1e1e' : '#f4f4f4';
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
