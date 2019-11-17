import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '0 30px',
    gridAutoRows: '30px',
  },
}));

const ImageGrid = ({ gifData }) => {
  const classes = useStyles();
  const images = gifData.map(gif => <ImageCard key={gif.id} gif={gif} />);

  return <div className={classes.container}>{images}</div>;
};

export default ImageGrid;
