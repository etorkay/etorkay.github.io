import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <article className="post markdown" id="about">
      <Helmet title="About">
        <meta name="description" content="Learn about Nero Novor" />
      </Helmet>
      <header>
        <div className="title">
          <h2>
            <Link to="/about">About Me</Link>
          </h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <Markdown>{markdown}</Markdown>
    </article>
  );
};

export default About;
