import React from 'react';
import classes from './Navbar.module.css';
import Logo from './Logo';
import Menu from './Menu';
import searchImage from '../../images/11.png'

function Header({search, setSearch, setCategory}) {
  return (
    <div className={classes.wrapper}>
      <Logo />
      <div className={classes.search}>
        <input type="text" placeholder="Type something to start search" className={classes.searchArea} value={search} onChange={(e)=> {
            setSearch(e.target.value)
          }}/>
        <div className={classes.searchImage}>
          <img alt="serach" src={searchImage} />
        </div>
        <button className={classes.resetButtonSearch} onClick={()=>setSearch('')}>reset</button>
      </div>
      <Menu setCategory={setCategory}/>
    </div>
  );
}


export default Header;