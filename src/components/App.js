import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchGifData} from '../reducers/gifReducer';

const App = ({fetchGifData, gifData}) => {
  
  useEffect(()=> {
    (()=> {
      fetchGifData('anchorman');
    })();
  }, [])
  return (
    <div>{gifData.map(gif => <img key={gif.id} src={gif.images.fixed_width.url} alt={gif.title} />)}</div>
  );
}

const mapStateToProps = ({status, gifData}) => ({status, gifData});

export default connect(mapStateToProps, {fetchGifData})(App);