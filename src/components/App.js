import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { gotFavoritesFromLS } from '../reducers/favoriteReducer';

import SearchResults from './SearchResults';
import SearchAppBar from './SearchAppBar';
import Favorite from './Favorite';
import TrendingResults from './TrendingResults';

const App = ({ gotFavoritesFromLS }) => {
  useEffect(() => {
    if (window.localStorage.getItem('favoriteGifs')) {
      gotFavoritesFromLS(JSON.parse(window.localStorage.getItem('favoriteGifs')));
    }
  }, []);

  return (
    <Router>
      <Route component={SearchAppBar} />
      <Route exact path="/" component={TrendingResults} />
      <Route exact path="/search/:query" component={SearchResults} />
      <Route exact path="/favorite" component={Favorite} />
    </Router>
  );
};

export default connect(null, { gotFavoritesFromLS })(App);
