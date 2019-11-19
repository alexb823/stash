import React, {useState} from 'react';
import { connect } from 'react-redux';


import GifGrid from './GifGrid';
import Spinner from './Spinner';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



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

  const handleGoBackClick = () => {
    history.goBack();
  }
  
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
      <GifGrid gifData={favoriteGifs} />
    </div>
  );
};

const mapStateToProps = ({ favoriteData }) => ({ favoriteData });

export default connect(mapStateToProps)(Favorite);



// return (
//     <div className={classes.root}>
//       <Button
//         variant="contained"
//         color="secondary"
//         className={classes.button}
//         startIcon={<ArrowBackIosIcon />}
//         onClick={handleGoBackClick}
//       >
//         Go Back
//       </Button>
      
//       <InfiniteScroll
//         pageStart={0}
//         initialLoad={false}
//         loadMore={() => handleNext}
//         hasMore={gifData.length < favoriteGifs.length}
//         loader={
//           <div className="loader" key={0}>
//             <Spinner />
//           </div>
//         }
//       >
//         {!favoriteGifs.length ? (
//           <div><Spinner /></div>
//         ) : (
//           <GifGrid gifData={gifData} />
//         )}
//       </InfiniteScroll>
//     </div>
//   );





  // return (
    
  //   <div id="scrollableDiv" className={classes.root}>
  //     <Button
  //       variant="contained"
  //       color="secondary"
  //       className={classes.button}
  //       startIcon={<ArrowBackIosIcon />}
  //       onClick={handleGoBackClick}
  //     >
  //       Go Back
  //     </Button>
      
  //     <InfiniteScroll
  //       scrollableTarget="window"
  //       scrollThreshold={1}
  //       dataLength={dataLength}
  //       next={handleNext}
  //       hasMore={dataLength < favoriteGifs.length}
  //       loader={<Spinner />}
  //     >
  //       {!favoriteGifs.length ? (
  //         <div></div>
  //       ) : (
  //         <GifGrid gifData={favoriteGifs} />
  //       )}
  //     </InfiniteScroll>
  //   </div>
  // );