import React from 'react';

import SearchForm from './SearchForm';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(2),
  },
  logoButton: {
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(1),
  },
  logoIconSm: {
    position: 'absolute',
    height: '40px',
  },
  logoIcon: {
    position: 'absolute',
    display: 'none',
  },
  favIcon: {
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.up('sm')]: {
    toolbar: {
      paddingLeft: theme.spacing(2),
    },
    logoIconSm: {
      display: 'none',
    },
    logoIcon: {
      position: 'absolute',
      display: 'inline-block',
    },
    logoButton: {
      height: '48px',
      width: '144px',
    },
  },
}));

const SearchAppBar = ({ history }) => {
  const classes = useStyles();

  return (
      <AppBar position="sticky">
        <Toolbar disableGutters={true} className={classes.toolbar}>
          <Button
            className={classes.logoButton}
            disableRipple
            disableFocusRipple
            aria-label="stash logo"
            color="inherit"
            onClick={() => history.push('/')}
          >
            <img
              className={classes.logoIcon}
              src="/logo-white.svg"
              alt="stash"
            />
            <img
              className={classes.logoIconSm}
              src="/logo-white-sm.svg"
              alt="stash"
            />
          </Button>
          <SearchForm />
          <IconButton
            className={classes.favIcon}
            edge="end"
            aria-label="user's favorite gifs"
            onClick={() => history.push('/favorite')}
            color="inherit"
          >
            <Tooltip title="Favorite">
              <FavoriteOutlinedIcon fontSize="large" />
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>
  );
};

export default SearchAppBar;
