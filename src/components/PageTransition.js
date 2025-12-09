import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
            initial: { opacity: 0, y: 20 },
            enter: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
        {children}
    </motion.div>
);

PageTransition.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageTransition;
