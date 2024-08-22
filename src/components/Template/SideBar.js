import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nero Kofi Etornam NOVOR</h2>
        <p>
          <a href="mailto:sessitornam@gmail.com">sessitornam@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hello there, Nero here. I am a{' '}
        <a href="https://www.knust.edu.gh/">KNUST</a> graduate, and currently a Teaching and Research Assistant under{' '}
        <a href="https://webapps.knust.edu.gh/staff/dirsearch/profile/areas-of-interest/3852d7e475d8.html">Prof. K. O. Boateng</a> , at the department of{' '}
        <a href="https://compeng.knust.edu.gh/undergraduate/bsc-computer-engineering">Computer Engineering</a>{' '}<a href="https://www.knust.edu.gh/">KNUST</a>. 
        I apreciate the fundamentals, the genesis, the building blocks of things. Specifically, I am interested in the field of{' '} <a href="https://en.wikipedia.org/wiki/Computer_architecture">Computer Architecture</a>, a domain which nicely blends simplicity into complexities! I get to express{' '}<a href="https://en.wikipedia.org/wiki/STEAM_education">STEAM</a>!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Nero Novor <Link to="/">etorkay.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
