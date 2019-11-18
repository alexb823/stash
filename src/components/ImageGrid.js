import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import uuid from 'uuid/v4';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gridAutoRows: '20px',
    gridGap: '0 10px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
      gridGap: '0 20px',
    },
  },
}));

const ImageGrid = ({ gifData }) => {
  const classes = useStyles();
  const images = gifData.map(gif => <ImageCard key={uuid()} gif={gif} />);

  return <div className={classes.container}>{images}</div>;
};

export default ImageGrid;
