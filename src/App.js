import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './containers/home';
import Explore from './containers/explore.jsx'

const App = () => {
  return (
      <Router basename="https://orenscoffee.columbiaspectator.com">
        <Routes>
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
