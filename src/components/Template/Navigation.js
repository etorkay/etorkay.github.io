// import React from 'react';
// import { Link } from 'react-router-dom';

// import Hamburger from './Hamburger';
// import routes from '../../data/routes';

// // Websites Navbar, displays routes defined in 'src/data/routes'
// const Navigation = () => (
//   <header id="header">
//     <h1 className="index-link">
//       {routes
//         .filter((l) => l.index)
//         .map((l) => (
//           <Link key={l.label} to={l.path}>
//             {l.label}
//           </Link>
//         ))}
//     </h1>
//     <nav className="links">
//       <ul>
//         {routes
//           .filter((l) => !l.index)
//           .map((l) => (
//             <li key={l.label}>
//               <Link to={l.path}>{l.label}</Link>
//             </li>
//           ))}
//       </ul>
//     </nav>
//     <Hamburger />
//   </header>
// );

// export default Navigation;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import routes from '../../data/routes';

const Navigation = () => {
  // Track theme state
  const [theme, setTheme] = useState('light');

  // On mount, load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header id="header">
      <h1 className="index-link">
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} to={l.path}>
              {l.label}
            </Link>
          ))}
      </h1>

      <nav className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
        </ul>
      </nav>

      <Hamburger />

      {/* Theme toggle switch */}
      <div className="theme-switch">
        <input
          type="checkbox"
          id="theme-toggle"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <label htmlFor="theme-toggle" className="switch">
          <span className="knob">
            <span className="icon sun">☀️</span>
            <span className="icon moon">🌙</span>
          </span>
        </label>
      </div>
    </header>
  );
};

export default Navigation;
