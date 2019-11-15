import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {fetchGifData} from '../reducers/gifReducer';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100vw',
    height: '100vh',
    padding: '0 10%'
  },
}));

const GifGridList = ({fetchGifData, gifData}) => {
  useEffect(() => {
      fetchGifData('anchorman');
  }, []);
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={5}>
        {gifData.map(gif => (
          <GridListTile key={gif.id} cols={1}>
            <img src={gif.images.fixed_width.url} alt={gif.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

const mapStateToProps = ({status, gifData}) => ({status, gifData});

export default connect(mapStateToProps, {fetchGifData})(GifGridList);