import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './containers/home';

const App = () => {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route
              exact path='/news'
              render={(props) => (
                <Section {...props} articles={news_articles} header='News' next='Arts & Entertainment' nextLink='/a&e'/>
              )}
              />*/}
        </Routes>
      </Router>
  );
}

export default App;
