import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { addedToFavorites } from '../reducers/favoriteReducer';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import LinkIcon from '@material-ui/icons/Link';

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
    height: 100,
    width: 150,
  },
  [theme.breakpoints.up('sm')]: {
    media: {
      height: 180,
      width: 270,
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    opacity: 0,
  },
  icon: {},
  popover: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    '& > div': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
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

const GifGridCard = ({
  gif,
  setSnackbarOpen,
  setSnackbarMessage,
  addedToFavorites,
}) => {
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

  const handleLinkClick = event => {
    event.stopPropagation();
    setSnackbarOpen(true);
    setSnackbarMessage(`Copied link to ${gif.title}`);
  };

  const handleFavoriteClick = event => {
    event.stopPropagation();
    setSnackbarOpen(true);
    setSnackbarMessage(`Added ${gif.title} to favorite`);
    addedToFavorites(gif);
  };

  return (
    <Grid item aria-label={gif.title}>
      <Card className={classes.card} onClick={handleCardClick}>
        <CardMedia
          className={classes.media}
          image={gif.images.fixed_width.url}
          // title={gif.title}
        >
          <div className={classes.actions}>
            <Tooltip title="Copy Link" placement="top">
              <IconButton
                className={classes.icon}
                color="secondary"
                onClick={handleLinkClick}
                aria-label={`Copy link to ${gif.title}`}
              >
                <CopyToClipboard text={gif.images.original.url}>
                  <LinkIcon />
                </CopyToClipboard>
              </IconButton>
            </Tooltip>
            <Tooltip title="Favorite" placement="top">
              <IconButton
                className={classes.icon}
                color="secondary"
                onClick={handleFavoriteClick}
                aria-label={`Favorite ${gif.title}`}
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
        </CardMedia>
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

export default connect(null, { addedToFavorites })(GifGridCard);
