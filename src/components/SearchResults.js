import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageGrid from './ImageGrid';
import { fetchMoreGifData } from '../reducers/gifReducer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    overflow: 'hidden',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const SearchResults = ({ match, status, gifData, fetchMoreGifData }) => {
  const classes = useStyles();
  console.log(match);

  const handleNext = () => {
    fetchMoreGifData(match.params.query, gifData.length);
  };

  return (
    <InfiniteScroll
      className={classes.root}
      dataLength={gifData.length}
      next={handleNext}
      hasMore={gifData.length < 400}
    >
      {status === 'fetching' ? (<div>loading...</div>) :
    (<ImageGrid gifData={gifData} />)}
    </InfiniteScroll>
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
