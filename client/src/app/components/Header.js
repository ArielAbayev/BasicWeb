import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

}));

export default() => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6">
            iCount
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}