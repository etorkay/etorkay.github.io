import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Blog/Cell';
import data from '../data/blog/posts';

const Blog = () => (
    <Main
        title="Blog"
        description="A collection of thoughts and writings."
    >
        <article className="post" id="blog">
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
    </Main>
);

export default Blog;
