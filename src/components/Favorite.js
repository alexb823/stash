import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import GifGrid from './GifGrid';
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

const Favorite = ({ history, favoriteData: {favoriteGifs} }) => {
  const classes = useStyles();

  const handleGoBackClick = () => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <Header title={'Favorite'} subTitle={favoriteGifs.length} />
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
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
