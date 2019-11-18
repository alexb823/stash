import React from 'react';

import SearchForm from './SearchForm';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
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
  [theme.breakpoints.up('sm')]: {
    toolbar: {
      paddingLeft: theme.spacing(2),
    },
    logoIconSm: {
      display: 'none'
    },
    logoIcon: {
      position: 'absolute',
      display: 'inline-block',
    },
    logoButton: {
      height: '48px',
      width: '144px',
    },
  }
}));

const SearchAppBar = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
