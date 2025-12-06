import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';
import Comments from '../components/Blog/Comments';
import posts from '../data/blog/posts';

const BlogPost = () => {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        if (post) {
            import(`../data/blog/${post.md}`)
                .then((res) => {
                    fetch(res.default)
                        .then((r) => r.text())
                        .then(setMarkdown);
                })
                .catch((err) => console.error(err));
        }
    }, [post]);

    if (!post) {
        return <Navigate to="/404" replace />;
    }

    return (
        <Main
            title={post.title}
            description={post.desc}
            fullPage
        >
            <article className="post markdown" id="blog-post">
                <header>
                    <div className="title">
                        <h2>{post.title}</h2>
                        <p>{post.subtitle}</p>
                    </div>
                    <div className="meta">
                        <time className="published" dateTime={post.date}>{post.date}</time>
                    </div>
                </header>
                <Markdown>
                    {markdown}
                </Markdown>
                <div className="horizontal-rule" />
                <Comments />
            </article>
        </Main>
    );
};

export default BlogPost;
