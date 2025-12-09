import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <>
    <Analytics />
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Nero NOVOR"
      defaultTitle="Nero NOVOR"
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">{props.children}</div>
      <AnimatePresence>
        {!props.fullPage && (
          <motion.div
            key="sidebar"
            initial={{ width: 0, opacity: 0, marginRight: 0, minWidth: 0 }}
            animate={{ width: '22em', opacity: 1, marginRight: '3em', minWidth: '22em' }}
            exit={{ width: 0, opacity: 0, marginRight: 0, minWidth: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', display: 'flex' }} // ensure content layout
          >
            <SideBar style={{ marginRight: 0 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Nero's personal website.",
};

export default Main;
