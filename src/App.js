import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './containers/home';
import Explore from './containers/explore.jsx'

const App = () => {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
