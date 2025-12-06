import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const Cell = ({ data }) => (
    <div className="cell-container">
        <article className="mini-post">
            <Link to={`/blog/${data.slug}`} className="post-link">
                <header>
                    <h3>{data.title}</h3>
                    <time className="published" dateTime={data.date}>{dayjs(data.date).format('MMMM, YYYY')}</time>
                </header>
                <div className="image">
                    {/* Placeholder for image if needed in future */}
                    {/* <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} /> */}
                </div>
                <div className="description">
                    <p>{data.desc}</p>
                </div>
            </Link>
        </article>
    </div>
);

Cell.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        image: PropTypes.string,
        date: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }).isRequired,
};

export default Cell;
