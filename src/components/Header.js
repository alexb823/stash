import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: theme.spacing(2, 0, 0, 0),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 500,
    textTransform: 'capitalize',
    marginRight: theme.spacing(1),
  },
  subtitle: {
    lineHeight: 1.8,
  },
  hr: {
    border: '2px solid #1ee3cf',
    margin: theme.spacing(1, 0, 5, 0),
  },
}));

const Header = ({ title, subTitle }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div id="back-to-top-anchor" className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          {subTitle} GIFs
        </Typography>
      </div>
      <hr className={classes.hr} />
    </Fragment>
  );
};

export default Header;
