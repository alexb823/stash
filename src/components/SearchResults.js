import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import InfiniteScroll from 'react-infinite-scroll-component';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchMoreGifData } from '../reducers/gifReducer';
import GifGrid from './GifGrid';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import ScrollTop from './ScrollTop';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    // overflowY: 'scroll',
    // '&::-webkit-scrollbar': {
    //   display: 'none',
    // },
  },
  grid: {},
}));

const SearchResults = ({ match, status, gifData, fetchMoreGifData }) => {
  const classes = useStyles();

  const handleNext = () => {
    fetchMoreGifData(match.params.query, gifData.length);
  };

  return (
    <div className={classes.root}>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleNext}
        hasMore={gifData.length < 400}
        loader={
          <div className="loader" key={0}>
            Loading Gifs ...
          </div>
        }
      >
        {status === 'fetching' ? (
          <div></div>
        ) : (
          <GifGrid gifData={gifData} className={classes.grid} />
        )}
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = ({ status, gifData }) => ({ status, gifData });

export default connect(mapStateToProps, { fetchMoreGifData })(SearchResults);
