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
import Spinner from './Spinner';
import Header from './Header';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const SearchResults = ({ match, history, searchData, fetchMoreGifData }) => {
  const {status, gifData, totalCount} = searchData;
  const classes = useStyles();

  const handleNext = () => {
    fetchMoreGifData(match.params.query, gifData.length);
  };

  return (
    <div className={classes.root}>
      <Header title={match.params.query} subTitle={totalCount} />
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
        {status === 'fetching' ? (
          <Spinner />
        ) : (
          <GifGrid gifData={gifData} />
        )}
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = ({ searchData }) => ({ searchData });

export default connect(mapStateToProps, { fetchMoreGifData })(SearchResults);



//   return (
//         <InfiniteScroll
//         className={classes.root}
        
//         scrollThreshold={1}
//         dataLength={gifData.length}
//         next={handleNext}

//         hasMore={gifData.length < totalCount}
//         loader={<Spinner />}
//       >
//         {status === 'fetching' ? (
//           <div></div>
//         ) : (
//           <GifGrid gifData={gifData} />
//         )}
//       </InfiniteScroll>
//   );
// };