import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { gotFavoritesFromLS } from '../reducers/favoriteReducer';
import SearchResults from './SearchResults';
import SearchAppBar from './SearchAppBar';
import Favorite from './Favorite';
import Trending from './Trending';
import ScrollTop from './ScrollTop';

const App = ({ gotFavoritesFromLS, children }) => {
  useEffect(() => {
    if (window.localStorage.getItem('favoriteGifs')) {
      gotFavoritesFromLS(
        JSON.parse(window.localStorage.getItem('favoriteGifs'))
      );
    }
  }, []);

  return (
    <Fragment>
      <Router>
        <Route component={SearchAppBar} />
        <Route exact path="/" component={Trending} />
        <Route exact path="/search/:query" component={SearchResults} />
        <Route exact path="/favorite" component={Favorite} />
      </Router>

      <ScrollTop children={children}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Fragment>
  );
};

export default connect(null, { gotFavoritesFromLS })(App);
