import React from 'react';
import Header from './Header';
import Content from './Content';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  app: {
    height: '100%',
    width: '100%'
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <Content />
    </div>
  );
}