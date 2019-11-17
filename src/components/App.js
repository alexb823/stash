import React, {Fragment} from 'react';
import SearchResults from './SearchResults';
import SearchAppBar from './SearchAppBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';



const App = (props) => {
  return (
    <Router>
      <Route component={SearchAppBar} />
      <Route exact path="/search/:query" component={SearchResults} />
    </Router>

  );
};

export default App;
