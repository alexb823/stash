import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
// import InfiniteScroll from 'react-infinite-scroll-component';


import GifGrid from './GifGrid';
import Spinner from './Spinner';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Icon from '@material-ui/core/Icon';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(3, 1, 6, 0),
    // backgroundColor: '#fcae00',
  },
}));

const Favorite = ({ history, favoriteData }) => {
  const {favoriteGifs} = favoriteData;
  const classes = useStyles();
  let gifData = favoriteGifs.slice(0, 30)

  const handleNext = () => {
    if (gifData.length < favoriteGifs.length) {
      gifData = favoriteGifs.slice(0, (gifData.length + 30))
      return gifData
    }
  };
  
  const handleGoBackClick = (e) => {
    history.goBack();
  }
  
   console.log(history)

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<ArrowBackIosIcon />}
        onClick={handleGoBackClick}
      >
        Go Back
      </Button>
      
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        loadMore={() => handleNext}
        hasMore={gifData.length < favoriteGifs.length}
        loader={
          <div className="loader" key={0}>
            <Spinner />
          </div>
        }
      >
        {!favoriteGifs.length ? (
          <div><Spinner /></div>
        ) : (
          <GifGrid gifData={gifData} />
        )}
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = ({ favoriteData }) => ({ favoriteData });

export default connect(mapStateToProps)(Favorite);
