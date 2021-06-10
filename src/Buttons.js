
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import 'firebase/firestore';
import{
  useFirestore
} from 'reactfire'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Button1() {
  const classes = useStyles();
  let data = Date().toLocaleString();
    useFirestore().collection('consentimiento').doc().set({data})
    .then((response) => console.log(response))
    .catch((error) => console.log('Hubo un error', error));
  return  <ButtonGroup  onClick={Button1}>
  <Button className={classes.root}>Acepto y doy mi consentimiento</Button>
</ButtonGroup>
}
export default function GroupSizesColors() {

  return (
    <div className='buttonDiv' >
<Button1></Button1>
    </div>
  );
}