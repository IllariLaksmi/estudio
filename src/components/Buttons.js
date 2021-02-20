import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = () => firebase.firestore();
const db = firestore;

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
  function clickFunction() {
    let data = Date().toLocaleString();
    db().collection('consentimiento').doc().set(data)
    .then((response) => console.log(response))
    .catch((error) => console.log('Hubo un error', error));
  }
  return (
    <div className={classes.root}>
      <ButtonGroup onClick={clickFunction} size="large" color="primary" aria-label="large outlined primary button group">
        <Button>Acepto</Button>
      </ButtonGroup>
    </div>
  );
}