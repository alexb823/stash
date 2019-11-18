import React, { useState } from 'react';
import uuid from 'uuid/v4';

import GifGridCard from './GifGridCard';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Snackbar, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  snackbar: {
    '& div': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const GifGrid = ({ gifData }) => {
  const [open, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('true');
  const classes = useStyles();

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  const gifCards = gifData.map(gif => (
    <GifGridCard
      key={uuid()}
      gif={gif}
      setSnackbarOpen={setSnackbarOpen}
      setSnackbarMessage={setSnackbarMessage}
    />
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="flex-start">
        {gifCards}
      </Grid>

      <Snackbar
        className={classes.snackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={2000}
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
          </IconButton>,
        ]}
      />
    </div>
  );
};


export default GifGrid;
