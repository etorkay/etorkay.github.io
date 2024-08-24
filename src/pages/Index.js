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
            <Link to="/">Welcome to My Digital Hub</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript. Adapted from <a href="https://github.com/mldangelo/personal-site">Michael D&apos;Angelo&apos;s</a> work
          </p>
        </div>
      </header>
      <p>
        {' '}
        Dive into my journey as I navigate the intersection of technology and creativity. Explore my resume, projects, and feel free to reach out to <Link to="/contact">me</Link>. 
        
      </p>
      <p>
        {' '}
        Whether you're here to learn more about me or just browsing through, there's something for everyone. And don't miss out on my latest visual captures—check out my shots on Instagram{' '}
        <a href="https://www.instagram.com/sessi.tor/">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
