import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const boxColors = [
  '#6342a5',
  '#3c138f',
  '#2a0d64',
  '#4be8d8',
  '#1ee3cf',
  '#159e90',
];

const useStyles = makeStyles(theme => ({
  root: {
    gridRowEnd: spans => `span ${spans}`,
    backgroundColor: () => boxColors[Math.floor(Math.random() * 6)],
    marginBottom: '60px',
  },
  image: {
    width: '100%',
  },
}));

const ImageCard = props => {
  const [spans, setSpans] = useState(8);
  const imgRef = useRef(null);

  const classes = useStyles(spans);

  const calcAndSetSpans = () => {
    const height = imgRef.current.clientHeight;
    const spans = Math.ceil(height / 30) + 1;
    setSpans(spans);
  };

  // useEffect( () => {
  //   imgRef.current.addEventListener('load', calcAndSetSpans);
  //   return () => {
  //     imgRef.current.removeEventListener('load', calcAndSetSpans);
  //   }
  // }, [])

  useEffect(() => {
    window.addEventListener('resize', calcAndSetSpans);
    return () => {
      window.removeEventListener('resize', calcAndSetSpans);
    };
  });

  return (
    <div className={classes.root} >
      <img
        ref={imgRef}
        className={classes.image}
        // src={props.gif.images.downsized_large.url}
        // src={props.gif.images.fixed_width.url}
        // src={props.gif.images.fixed_width_downsampled.url}
        src={props.gif.images.original_still.url}
        alt={props.gif.title}
        onLoad={calcAndSetSpans}
      />
    </div>
  );
};

export default ImageCard;
