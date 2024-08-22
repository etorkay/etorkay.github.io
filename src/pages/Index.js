import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Nero's personal website. KNUST graduate, "
      + 'Computer Architect and Philosopher who creates truce between electrons artistically.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript. Adapted from <a href="https://github.com/mldangelo/personal-site">Michael D&apos;Angelo&apos;s</a> work
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        And oh, you do check out my shots on Instagram{' '}
        <a href="https://www.instagram.com/sessi.tor/">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
