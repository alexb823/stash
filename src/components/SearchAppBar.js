import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchForm from './SearchForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  logoButton: {
    height: '32px',
    width: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: theme.spacing(2),
  },
  logoIcon: {
    height: '100%',
    position: 'absolute',
  },
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
            </Button>
          <SearchForm />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
