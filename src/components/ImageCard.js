import React, {useRef, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%'
  }
}));

const ImageCard = (props) => {
  const classes = useStyles();
  const imgRef = useRef(null);

  const [spans, setSpans] = useState(0);

  const calcAndSetSpans = () => {
    const height = imgRef.current.clientHeight;
    const spans = Math.ceil(height / 4) + 1;
    setSpans(spans);
  }
  
  // useEffect( () => {
  //   imgRef.current.addEventListener('load', calcAndSetSpans);
  //   return () => {
  //     imgRef.current.removeEventListener('load', calcAndSetSpans);
  //   }
  // }, [])
  
  useEffect(() => {
    window.addEventListener('resize', calcAndSetSpans);
    return () => {
      window.removeEventListener('resize', calcAndSetSpans)
    }
  })
 
  return (
    <div style={{gridRowEnd: `span ${spans}`}}>
      <img
        ref={imgRef}
        className={classes.image}
        src={props.gif.images.fixed_width.url}
        alt={props.gif.title}
        onLoad={calcAndSetSpans}
      />
    </div>
    )
}

export default ImageCard;