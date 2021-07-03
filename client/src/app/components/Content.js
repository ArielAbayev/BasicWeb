import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  box : {
      height: '60%',
      width: '80%',
      backgroundColor: 'blue',
  }
}));

export default() => {
  const classes = useStyles();

  return (
        <div className={classes.root}>
      <Box className={classes.box}>
          1 2 3 4
    </Box>
    </div>
  );
}
