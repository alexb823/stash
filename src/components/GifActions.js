import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import LinkIcon from '@material-ui/icons/Link';
import CloseIcon from '@material-ui/icons/Close';

import {
  addedToFavorites,
  removedFromFavorites,
} from '../reducers/favoriteReducer';


const useStyles = makeStyles(theme => ({
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    opacity: 0,
  },
  [theme.breakpoints.down('xs')]: {
    actions: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      opacity: 1,
      transition: 'opacity 0.4s ease-in-out',
    },
  },
  snackbar: {
    '& div': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const GifActions = ({
  gif,
  favoriteData,
  addedToFavorites,
  removedFromFavorites,
}) => {
  const classes = useStyles();
  const [open, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('true');
  const isFavorite = favoriteData.favoriteIdHash[gif.id];
  
  useEffect(() => {
    window.localStorage.setItem('favoriteGifs', JSON.stringify(favoriteData));
  }, [favoriteData]);
  
  const closeSnackbar = () => {
    setSnackbarOpen(false);
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
    addedToFavorites(gif);
  };

  const handleUnfavoriteClick = event => {
    event.stopPropagation();
    setSnackbarOpen(true);
    setSnackbarMessage(`Removed ${gif.title} from favorites`);
    removedFromFavorites(gif.id);
  };

  return (
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
            color="secondary"
            onClick={handleFavoriteClick}
            aria-label={`Add ${gif.title} to favorites`}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Tooltip>
      )}
      
      <Snackbar
        className={classes.snackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={1300}
        onClose={closeSnackbar}
        message={<span id="message-id"> {snackbarMessage} </span>}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
          <CloseIcon />
          </IconButton>
        ]}
      />
  </div>
  );
};

const mapStateToProps = ({ favoriteData }) => ({ favoriteData });

export default connect(mapStateToProps, {addedToFavorites,
  removedFromFavorites})(GifActions);