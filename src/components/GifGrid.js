import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    // height: 'calc(100vh - 64px)',
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem: {
    // height: '10px',
  },
  image: {
    marginBottom: theme.spacing(1),
  },
}));

const GifGrid = ({ gifData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="flex-start">
        {gifData.map(gif => (
          <Grid
            className={classes.gridItem}
            item
            key={gif.id}
          >
            <img src={gif.images.downsized_large.url} alt={gif.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ status, gifData }) => ({ status, gifData });

export default connect(mapStateToProps)(GifGrid);
