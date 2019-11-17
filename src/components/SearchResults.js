import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
// import InfiniteScroll from 'react-infinite-scroll-component';
import InfiniteScroll from 'react-infinite-scroller';
import ImageGrid from './ImageGrid';
import { fetchMoreGifData } from '../reducers/gifReducer';
import GifGridList from './GifGridList';
import GifGrid from './GifGrid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    // overflowY: 'scroll',
    // '&::-webkit-scrollbar': {
    //   display: 'none',
    // },
  },
  grid: {

  },
}));

const SearchResults = ({ match, status, gifData, fetchMoreGifData }) => {
  const classes = useStyles();

  const handleNext = () => {
    fetchMoreGifData(match.params.query, gifData.length);
  };

  return (
    // <InfiniteScroll
    //   className={classes.root}
    //   dataLength={gifData.length}
    //   next={handleNext}
    //   hasMore={gifData.length < 400}
    // >
    <div className={classes.root}>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleNext}
        hasMore={gifData.length < 400}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {status === 'fetching' ? (
          <div>loading...</div>
        ) : (
          <GifGrid gifData={gifData} className={classes.grid} />
        )}
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = ({ status, gifData }) => ({ status, gifData });

export default connect(mapStateToProps, { fetchMoreGifData })(SearchResults);

// return (
//   <div className={classes.root}>
//   {status === 'fetching' ? (<div>loading...</div>) :
//     (<ImageGrid gifData={gifData} />)}
//   </div>
// );
