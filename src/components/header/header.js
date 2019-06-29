import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: '1%',
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            QrCode Generator
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
