import React from 'react';
import logo from '../../images/06.png';
import classes from './Logo.module.css';
import { Link } from 'react-router-dom'


function Logo() {
  return (
    <div className={classes.logo}>
      <Link to="/" className={classes.logoImage}>
        <img src={ logo } alt={'logotype'} />
      </Link>
    </div>
  );
}


export default Logo;