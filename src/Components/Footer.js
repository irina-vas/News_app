import React from 'react';
import classes from './Footer.module.css';


function Footer() {
  return (
    <div className={classes.wrapper}>
      <hr color="#E8E8E8"/>
      <p className={classes.description}>
        <span>News App</span> 2021 copyright all rights reserved
      </p>
    </div>
  );
}


export default Footer;