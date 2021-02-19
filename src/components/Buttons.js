import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupSizesColors() {
  const classes = useStyles();
  let x = 0;
  function clickFunction() {
    x++;
    console.log(x, Date().toLocaleString());
  }
  return (
    <div className={classes.root}>
      <ButtonGroup onClick={clickFunction} size="large" color="primary" aria-label="large outlined primary button group">
        <Button>Acepto</Button>
      </ButtonGroup>
    </div>
  );
}