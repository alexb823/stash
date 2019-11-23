import React from 'react';
import uuid from 'uuid/v4';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import GifGridCard from './GifGridCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const GifGrid = ({ gifData }) => {
  const classes = useStyles();

  const gifCards = gifData.map(gif => <GifGridCard key={uuid()} gif={gif} />);

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="flex-start">
        {gifCards}
      </Grid>
    </div>
  );
};

export default GifGrid;
