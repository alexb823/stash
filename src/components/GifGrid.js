import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import Grid from '@material-ui/core/Grid';
import GifGridCard from './GifGridCard';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const GifGrid = ({ gifData }) => {
  const classes = useStyles();

  const gifCards = gifData.map(gif => <GifGridCard key={uuid()} gif={gif} />)

  return (
    <div className={classes.root}  >
      <Grid container spacing={1} justify="center" alignItems="flex-start" >
        {gifCards}
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ status, gifData }) => ({ status, gifData });

export default connect(mapStateToProps)(GifGrid);

