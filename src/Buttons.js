
import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "firebase/app";
import CircularIndeterminate from './loading';



const onCreate = () => {
  const db = firebase.firestore();
  let data = Date().toLocaleString();
  db.collection('consentimiento').add({ data })
    .then((response) => {
      console.log(response);
      document.getElementById('main').style.display = 'none';
      document.getElementById('button').style.display = 'none';
      document.getElementById('response').style.display = 'block';
    }
    )

};
// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function ClassNames(props) {

  const { classes, children, className, ...other } = props;
  return (
    <div className='buttonDiv' >
      <Button id='button' className={clsx(classes.root, className)} {...other} onClick={onCreate}>ACEPTO Y DOY MI CONSENTIMIENTO</Button>
    </div>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);