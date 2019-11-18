import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { makeStyles } from '@material-ui/core/styles';

import GifGrid from './GifGrid';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const Favorite = ({ match, favoriteData }) => {
  const {favoriteGifs} = favoriteData;
  const classes = useStyles();

  // const handleNext = () => {
  //   fetchMoreGifData(match.params.query, gifData.length);
  // };

  return (
    <div className={classes.root}>
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={handleNext}
        hasMore={gifData.length < totalCount}
        loader={
          <div className="loader" key={0}>
            Loading Gifs ...
          </div>
        }
      > */}
        {!favoriteGifs.length ? (
          <div></div>
        ) : (
          <GifGrid gifData={favoriteGifs} />
        )}
      {/* </InfiniteScroll> */}
    </div>
  );
};

const mapStateToProps = ({ favoriteData }) => ({ favoriteData });

export default connect(mapStateToProps)(Favorite);
