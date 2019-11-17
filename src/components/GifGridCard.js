import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const boxColors = [
  '#6342a5',
  '#3c138f',
  '#2a0d64',
  '#4be8d8',
  '#1ee3cf',
  '#159e90',
];

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 150,
    backgroundColor: () => boxColors[Math.floor(Math.random() * 6)],
  },
  media: {
    height: 180,
    width: 270,
  },
}));

const GifGridCard = ({ gif }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={gif.images.fixed_width.url}
          title={gif.title}
        />
      </Card>
    </Grid>
  );
};

export default GifGridCard;
