import React, { useState, useEffect } from 'react';
import Giscus from '@giscus/react';

const Comments = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Function to get current theme from document
        const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light';

        // Set initial theme
        setTheme(getTheme());

        // Create observer to watch for attribute changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    setTheme(getTheme());
                }
            });
        });

        // Start observing
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        // Cleanup
        return () => observer.disconnect();
    }, []);

    return (
        <div className="comments-wrapper">
            <Giscus
                id="comments"
                repo="etorkay/etorkay.github.io"
                repoId="YOUR_REPO_ID_HERE"
                category="Announcements"
                categoryId="YOUR_CATEGORY_ID_HERE"
                mapping="pathname"
                term="Welcome to my blog!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={theme}
                lang="en"
                loading="lazy"
            />
        </div>
    );
};

export default Comments;
