import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { fetchGifData } from '../reducers/gifReducer';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: '35px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const SearchForm = ({ location, history, fetchGifData }) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchText = location.pathname.split('/').slice(-1)[0];
    if (searchText) {
      setQuery(searchText);
      fetchGifData(searchText);
    }
  }, [location]);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchGifData(query);
    history.push(`/search/${query}`);
    setQuery('');
  };

  return (
    <form className={classes.search} onSubmit={handleSubmit}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search All GIFs"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

export default withRouter(connect(null, { fetchGifData })(SearchForm));
