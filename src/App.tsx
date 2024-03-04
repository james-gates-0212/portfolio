import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainRoutes from './infos/MainRoutes';
import { Tooltip } from 'react-tooltip';
// import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Preloader from './components/Pre';
import ScrollToTop from './components/ScrollToTop';
import Sitemap from './components/Sitemap';
import Stars from './backgrounds/Stars';

// const isDevelopmentMode = process.env.NODE_ENV === 'development';
// const isProductionMode = process.env.NODE_ENV === 'production';

const App = () => {
  const load = false;
  // const [load, updateLoad] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     updateLoad(false);
  //   }, 1200);

  //   if (isDevelopmentMode) {
  //     console.log('development', isDevelopmentMode);
  //   }
  //   if (isProductionMode) {
  //     console.log('production', isProductionMode);
  //   }

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <Stars />
      <Router>
        {/* <Preloader load={load} /> */}
        <div className="App" id={load ? 'no-scroll' : 'scroll'}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            {MainRoutes.map(({ route, element }, idx) => (
              <Route key={`route-${idx}`} path={route} element={element} />
            ))}
            <Route path="sitemap.xml" element={<Sitemap />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
          <Tooltip anchorSelect=".title-tooltip" place="bottom" />
        </div>
      </Router>
    </>
  );
};

export default App;
