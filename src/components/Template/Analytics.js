import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const { NODE_ENV, REACT_APP_GA_TRACKING_ID } = process.env;

if (NODE_ENV === "production" && REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(REACT_APP_GA_TRACKING_ID);
} else {
  console.warn("⚠️ Skipping Google Analytics: GA_TRACKING_ID not set");
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === "production" && REACT_APP_GA_TRACKING_ID) {
      ReactGA.set({ page: pathname });
      // ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
