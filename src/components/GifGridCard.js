import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

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
    backgroundColor: () => boxColors[Math.floor(Math.random() * 6)],
  },
  media: {
    height: 100,
    width: 150,
  },
  [theme.breakpoints.up('sm')]: {
    media: {
      height: 180,
      width: 270,
    },
  },
  popover: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    '& > div': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    }
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '90vh',
    marginLeft: 'auto',
    marginRight: '20vw',
  },
  popoverImg: {
    borderRadius: '4px',
  },
}));

const GifGridCard = ({ gif }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = event => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item>
      <Card className={classes.card} onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={gif.images.fixed_width.url}
          title={gif.title}
        />
      </Card>

      <Popover
        id={id}
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
      >
        <div className={classes.imgContainer}>
          <img
            src={gif.images.original.url}
            alt={gif.title}
            className={classes.popoverImg}
          />
        </div>
      </Popover>
    </Grid>
  );
};

export default GifGridCard;
