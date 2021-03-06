import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    background: '#2CCDBE',
    borderRadius: 3,
    margin: 0,
    color: 'white',
    fontWeight: 'bolder',
    textAlign: 'center',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
          Estudio de ciudadania sexual de la mujer peruana
          </Typography>
          </Toolbar>
      </AppBar>
    </div>
  );
}