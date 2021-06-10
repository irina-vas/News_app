import React from 'react';
import classes from './ScrollButton.module.css';
import scrollArrow from '../images/09.png';


function ScrollButton() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.scrollButton}>
        <a href="#" onClick={()=> window.scrollBy(0, 0)}>Scroll to top</a>
      </div>
      <div className={classes.scrollImg}>
        <img alt="scroll" src={scrollArrow}/>
      </div>
    </div>
  );
}


export default ScrollButton;