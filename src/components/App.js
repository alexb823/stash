import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchResults from './SearchResults';
import SearchAppBar from './SearchAppBar';
import Favorite from './Favorite';



const App = (props) => {
  return (
    <Router>
      <Route component={SearchAppBar} />
      <Route exact path="/search/:query" component={SearchResults} />
      <Route exact path="/favorite" component={Favorite} />
    </Router>

  );
};

export default App;
