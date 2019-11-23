import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import {
  fetchTrendingGifData,
  fetchMoreTrendingGifData,
} from '../reducers/gifReducer';
import GifGrid from './GifGrid';
import Spinner from './Spinner';
import Header from './Header';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const Trending = ({
  searchData,
  fetchTrendingGifData,
  fetchMoreTrendingGifData,
}) => {
  const { status, gifData, totalCount } = searchData;
  const classes = useStyles();

  useEffect(() => {
    fetchTrendingGifData();
  }, []);

  const handleNext = () => {
    fetchMoreTrendingGifData(gifData.length);
  };

  return (
    <div className={classes.root}>
      <Header title={'Trending'} subTitle={totalCount} />
      <InfiniteScroll
        threshold={0}
        pageStart={0}
        initialLoad={false}
        loadMore={handleNext}
        hasMore={gifData.length < totalCount}
        loader={
          <div className="loader" key={0}>
            <Spinner />
          </div>
        }
      >
        {status === 'fetching' ? <div></div> : <GifGrid gifData={gifData} />}
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = ({ searchData }) => ({ searchData });

export default connect(mapStateToProps, {
  fetchTrendingGifData,
  fetchMoreTrendingGifData,
})(Trending);
