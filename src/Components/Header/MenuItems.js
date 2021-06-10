import React from 'react';
import classes from './MenuItems.module.css';
import flash from '../../images/07.png'

const MenuItems = ({setCategory}) => {
  return (
    <div className={classes.menuList}>
      <a href={'/categories'} className={classes.MenuItem}>Categories</a>
        <div className={classes.container}>
          <div className={classes.column}>
            <span onClick={()=> setCategory('search?q=sport')}>Sport</span>
            <span onClick={()=> setCategory('search?q=world')}>World</span>
            <span onClick={()=> setCategory('search?q=covid')}>Covid</span>
            <span onClick={()=> setCategory('search?q=business')}>Business</span>
          </div>
          <div className={classes.column}>
            <span onClick={()=> setCategory('search?q=politics')}>Politics</span>
            <span onClick={()=> setCategory('search?q=science')}>Science</span>
            <span onClick={()=> setCategory('search?q=religion')}>Religion</span>
            <span onClick={()=> setCategory('search?q=health')}>Health</span>
          </div>
        </div>
      <a href={'/trending_news'} className={classes.MenuItem}>
        <div className={classes.flashIcon}>
          <img alt="flash" src={flash} />
        </div>
        <div className={classes.categoryItem}>Trending news</div>
      </a>
    </div>
  );
}

export default MenuItems;