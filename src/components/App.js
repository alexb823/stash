import React, {Fragment, useEffect} from 'react';
import GifGridList from './GifGridList';
import SearchAppBar from './SearchAppBar';

const App = () => {

  return (
    <Fragment>
    <SearchAppBar />
    <GifGridList />
    </Fragment>
  );
}


export default App;