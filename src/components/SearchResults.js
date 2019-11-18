import React from 'react';
import { connect } from 'react-redux';
// import InfiniteScroll from 'react-infinite-scroll-component';
import InfiniteScroll from 'react-infinite-scroller';

import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import ScrollTop from './ScrollTop';

import { fetchMoreGifData } from '../reducers/gifReducer';
import GifGrid from './GifGrid';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const SearchResults = ({ match, searchData, fetchMoreGifData }) => {
  const {status, gifData, totalCount} = searchData;
  const classes = useStyles();

  const handleNext = () => {
    fetchMoreGifData(match.params.query, gifData.length);
  };

  return (
    <div className={classes.root}>
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        loadMore={handleNext}
        hasMore={gifData.length < totalCount}
        loader={
          <div className="loader" key={0}>
            Loading Gifs ...
          </div>
        }
      >
        {status === 'fetching' ? (
          <div>MY LOADER</div>
        ) : (
          <GifGrid gifData={gifData} />
        )}
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = ({ searchData }) => ({ searchData });

export default connect(mapStateToProps, { fetchMoreGifData })(SearchResults);
