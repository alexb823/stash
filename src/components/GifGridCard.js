import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Popover from '@material-ui/core/Popover';

import boxColors from '../colors';
import GifActions from './GifActions';

const useStyles = makeStyles(theme => ({
  card: {
    cursor: 'pointer',
    backgroundColor: () => boxColors[Math.floor(Math.random() * 6)],
    '&:hover div': {
      opacity: 1,
      transition: 'opacity 0.4s ease-in-out',
    },
  },
  media: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 180,
    width: 270,
  },
  [theme.breakpoints.down('xs')]: {
    media: {
      height: 100,
      width: 150,
    },
  },
  popover: {
    '& > div': {
      backgroundColor: 'rgba(0, 0, 0, 1)',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  imgContainer: {
    '&:hover div': {
      opacity: 1,
      transition: 'opacity 0.4s ease-in-out',
    },
  },
  popoverActions: {
    position: 'relative',
    marginTop: '-53px',
  },
  popoverImg: {
    borderRadius: '4px',
    maxWidth: 'calc(100vw - 32px)',
  },
}));

const GifGridCard = ({ gif }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleCardClick = event => {
    event.stopPropagation();
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item aria-label={gif.title}>
      <Card className={classes.card} onClick={handleCardClick}>
        <CardMedia className={classes.media} image={gif.images.fixed_width.url}>
          <GifActions gif={gif} />
        </CardMedia>
      </Card>

      <Popover
        id={id}
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <div className={classes.imgContainer}>
          <img
            className={classes.popoverImg}
            src={gif.images.original.url}
            alt={gif.title}
          />
          <div className={classes.popoverActions}>
            <GifActions gif={gif} />
          </div>
        </div>
      </Popover>
    </Grid>
  );
};

export default GifGridCard;
