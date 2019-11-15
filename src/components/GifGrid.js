import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  gridItem: {
    width: '300px',
  },
  image: {
    width: '100%',
  },
}));

const GifGrid = ({ gifData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container  direction="column" spacing={1} justify="flex-start" alignItems="center">
        {gifData.map(gif => (
          <Grid
            item
            className={classes.gridItem}
            key={gif.id}
          >
            <img className={classes.image} src={gif.images.downsized_large.url} alt={gif.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ status, gifData }) => ({ status, gifData });

export default connect(mapStateToProps)(GifGrid);
