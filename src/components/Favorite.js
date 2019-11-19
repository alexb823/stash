import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import GifGrid from './GifGrid';
import Spinner from './Spinner';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const Favorite = ({ favoriteData }) => {
  const {favoriteGifs} = favoriteData;
  const classes = useStyles();
  let gifData = favoriteGifs.slice(0, 30)

  const handleNext = () => {
    if (gifData.length < favoriteGifs.length) {
      gifData = favoriteGifs.slice(0, (gifData.length + 30))
      return gifData
    }
  };

  return (
    <div className={classes.root}>
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
