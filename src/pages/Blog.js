import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Cell from '../components/Blog/Cell';
import data from '../data/blog/posts';

const Blog = () => (
    <article className="post" id="blog">
        <Helmet title="Blog">
            <meta name="description" content="A collection of thoughts and writings." />
        </Helmet>
        <header>
            <div className="title">
                <h2><Link to="/blog">Blog</Link></h2>
                <p>Thoughts, tutorials, and updates.</p>
            </div>
        </header>
        {data.map((post) => (
            <Cell
                data={post}
                key={post.slug}
            />
        ))}
    </article>
);

export default Blog;
