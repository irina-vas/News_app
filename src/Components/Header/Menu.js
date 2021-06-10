import React, { useState } from 'react';
import classes from './Menu.module.css';
import menuClosed from '../../images/02.png';
import MenuItems from './MenuItems';
import menuOpened from '../../images/10.png';

function Menu({setCategory}) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className={classes.menu}>
      {menuActive && <MenuItems setCategory={setCategory}/> }
      <div className={classes.menuIcon} onClick={ () => setMenuActive(!menuActive)}>
        <img src={menuActive ? menuOpened : menuClosed} alt={''} />
      </div>
    </div>
  );
}

export default Menu;
