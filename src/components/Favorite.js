import React, {useState} from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import GifGrid from './GifGrid';
import Spinner from './Spinner';
import Header from './Header';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  buttonContainer: {
    width: '100%',
    margin: theme.spacing(0, 0, 5, 0),
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
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
      <Header title={'Favorite'} subTitle={favoriteGifs.length} />
      <div className={classes.buttonContainer}>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ArrowBackIosIcon />}
        onClick={handleGoBackClick}
      >
        Go Back
      </Button>
      </div>
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