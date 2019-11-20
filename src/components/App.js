import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { gotFavoritesFromLS } from '../reducers/favoriteReducer';

import SearchResults from './SearchResults';
import SearchAppBar from './SearchAppBar';
import Favorite from './Favorite';
import Trending from './Trending';

const App = ({ favoriteData, gotFavoritesFromLS }) => {
  useEffect(() => {
    if (window.localStorage.getItem('favoriteGifs')) {
      gotFavoritesFromLS(
        JSON.parse(window.localStorage.getItem('favoriteGifs'))
      );
    }
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem('favoriteGifs', JSON.stringify(favoriteData));
  }, [favoriteData]);

  return (
    <Router>
      <Route component={SearchAppBar} />
      <Route exact path="/" component={Trending} />
      <Route exact path="/search/:query" component={SearchResults} />
      <Route exact path="/favorite" component={Favorite} />
    </Router>
  );
};

const mapStateToProps = ({ favoriteData }) => ({ favoriteData });

export default connect(mapStateToProps, { gotFavoritesFromLS })(App);
