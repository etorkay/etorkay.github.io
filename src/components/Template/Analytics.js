import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const { NODE_ENV, GA_MEASUREMENT_ID } = process.env;

if (NODE_ENV === 'production') {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production') {
      ReactGA.set({
        page: pathname,
      });
      //ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;