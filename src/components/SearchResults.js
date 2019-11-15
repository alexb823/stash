import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ImageGrid from './ImageGrid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  }
}));

const SearchResults = ({ status, gifData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {status === 'fetching' ? (<div>loading...</div>) : 
      (<ImageGrid gifData={gifData} />)}
    </div>
  );
};

const mapStateToProps = ({ status, gifData }) => ({ status, gifData });

export default connect(mapStateToProps)(SearchResults);