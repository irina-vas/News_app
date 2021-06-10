import React from 'react';
import loader from '../images/08.gif';
import classes from './Loader.module.css';


function Loader() {
  return (
    <div className={classes.loader__icon}>
      <img src={loader} />
    </div>
  );
}


export default Loader;