import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// const Cell = ({ data }) => (
//   <div className="cell-container" style={{ marginBottom: '20px', width: '100%', height: 'flex' }}>
//     <article className="mini-post" style={{ padding: '15px', boxSizing: 'border-box', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
//       <header>
//         <h3 style={{ margin: 0 }}>
//           <a href={data.link} style={{ textDecoration: 'none', color: 'inherit' }}>{data.title}</a>
//         </h3>
//         <time className="published" style={{ fontSize: '0.85em', color: '#999' }}>
//           {dayjs(data.date).format('MMMM, YYYY')}
//         </time>
//       </header>
//       {data.image && (
//         <a href={data.link} className="image" style={{ display: 'block', marginTop: '10px', marginBottom: '10px' }}>
//           <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', borderRadius: '4px' }} />
//         </a>
//       )}
//       <div className="description" style={{ marginTop: '10px' }}>
//         <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
//           {data.desc.split('\n').map((item, index) => (
//             <li key={index} style={{}}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </article>
//   </div>
// );



// const Cell = ({ data }) => (
//   <div className="cell-container">
//     <article className="mini-post">
//       <header>
//         <h3>
//           <a href={data.link}>{data.title}</a>
//         </h3>
//         <time className="published">
//           {dayjs(data.date).format('MMMM, YYYY')}
//         </time>
//       </header>
//       <a href={data.link} className="image">
//         <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
//       </a>
//       <div className="description">
//         <ul>
//           {data.desc.split('\n').map((item, index) => (
//             <li key={index} style={{}}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </article>
//   </div>
// );

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.date).format('MMMM, YYYY')}
        </time>
      </header>
      {data.image && (
        <a href={data.link} className="image">
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
        </a>
      )}
      <div className="description">
        <ul>
          {data.desc.split('\n').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
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
  }).isRequired,
};

export default Cell;









// const Cell = ({ data }) => (
//   <div className="cell-container">
//     <article className="mini-post">
//       <header>
//         <h3>
//           <a href={data.link}>{data.title}</a>
//         </h3>
//         <time className="published">
//           {dayjs(data.date).format('MMMM, YYYY')}
//         </time>
//       </header>
//       <a href={data.link} className="image">
//         <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
//       </a>
//       <div className="description">
//         <p>{data.desc}</p>
//       </div>
//     </article>
//   </div>
// );