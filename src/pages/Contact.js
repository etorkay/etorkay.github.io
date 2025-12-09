import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <article className="post" id="contact">
    <Helmet title="Contact">
      <meta name="description" content="Contact Nero Novor via email @ sessitornam@gmail.com" />
    </Helmet>
    <header>
      <div className="title">
        <h2>
          <Link to="/contact">Contact</Link>
        </h2>
      </div>
    </header>
    <div className="email-at">
      <p>Feel free to get in touch. You can email me at: </p>
      <EmailLink />
    </div>
    <ContactIcons />
  </article>
);

export default Contact;
