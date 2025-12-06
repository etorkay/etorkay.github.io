import React from 'react';
import Giscus from '@giscus/react';

const Comments = () => (
    <div className="comments-wrapper">
        <Giscus
            id="comments"
            repo="etorkay/etorkay.github.io"
            repoId="YOUR_REPO_ID_HERE" // User needs to provide this
            category="Announcements"
            categoryId="YOUR_CATEGORY_ID_HERE" // User needs to provide this
            mapping="pathname"
            term="Welcome to my blog!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
        />
    </div>
);

export default Comments;
