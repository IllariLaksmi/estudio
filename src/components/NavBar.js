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
    fontSize: '200%',
  },
  bar: {
    background: 'linear-gradient(90deg,#ff0063,#d17899 50%,#ff00ce)',
    display: 'flex',
    borderRadius: '20px',
    margin: 0,
    color: 'white',
    fontWeight: 'bolder',
    flexDirection: 'column',
    justifyContent:'center',
    textAlign: 'center',
    padding:'8px',
    boxShadow: '5px 5px 15px 5px #e01d94'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
         ESTUDIO DE CIUDADANÍA SEXUAL DE LA MUJER PERUANA
          </Typography>
          </Toolbar>
      </AppBar>
    </div>
  );
}