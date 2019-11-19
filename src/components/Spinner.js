import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  progress: {
    margin: theme.spacing(2),
  },
});

const Spinner = ({ classes }) => {
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <CircularProgress className={classes.progress} disableShrink />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Spinner);
