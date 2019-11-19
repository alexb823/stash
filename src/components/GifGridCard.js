import React, { useState,  useEffect } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {  addedToFavorites, removedFromFavorites } from '../reducers/favoriteReducer';
import boxColors from '../colors';

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
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    opacity: 0,
  },
  [theme.breakpoints.down('xs')]: {
    media: {
      height: 100,
      width: 150,
    },
    actions: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      opacity: 1,
      transition: 'opacity 0.4s ease-in-out',
    },
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
  favoriteData,
  setSnackbarOpen,
  setSnackbarMessage,
  addedToFavorites,
  removedFromFavorites,
}) => {
  const isFavorite = favoriteData.favoriteIdHash[gif.id];
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    window.localStorage.setItem('favoriteGifs', JSON.stringify(favoriteData));
  }, [favoriteData])

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
    setSnackbarMessage(`Added ${gif.title} to favorites`);
    addedToFavorites(gif)
  };

  const handleUnfavoriteClick = event => {
    event.stopPropagation();
    setSnackbarOpen(true);
    setSnackbarMessage(`Removed ${gif.title} from favorites`);
    removedFromFavorites(gif.id);
  };

  return (
    <Grid item aria-label={gif.title}>
      <Card className={classes.card} onClick={handleCardClick}>
        <CardMedia className={classes.media} image={gif.images.fixed_width.url}>
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

            {isFavorite ? (
              <Tooltip title="Unfavorite" placement="top">
                <IconButton
                  className={classes.icon}
                  color="secondary"
                  onClick={handleUnfavoriteClick}
                  aria-label={`Remove ${gif.title} from favorites`}
                >
                  <FavoriteOutlinedIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Favorite" placement="top">
                <IconButton
                  className={classes.icon}
                  color="secondary"
                  onClick={handleFavoriteClick}
                  aria-label={`Add ${gif.title} to favorites`}
                >
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </Tooltip>
            )}
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

const mapStateToProps = ({ favoriteData }) => ({ favoriteData });

export default connect(mapStateToProps, {
  addedToFavorites,
  removedFromFavorites,
})(GifGridCard);

