import React from 'react';
import GifGrid from './GifGrid';
import GifGridList from './GifGridList';
import SearchAppBar from './SearchAppBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route component={SearchAppBar} />
      <Route exact path="/search/:query" component={GifGrid} />
    </Router>
  );
};

export default App;
