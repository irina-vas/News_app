import React from 'react';
import classes from './MainNews.module.css';
import { Link } from 'react-router-dom';
import LoremIpsum from 'react-lorem-ipsum';


function MainNews(props) {
    function formatDate(date){
      const monthNum = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
      }
  
      let [year, month, day] = date.slice(0,10).split('-');
      if (day === '01') {
        day = day + 'st'
      } else if (day === '02') {
        day = day + 'nd'
      } else {
        day = day + 'th'
      }
      return `${monthNum[month]} ${day} ${year}`
    }
  
    function titleCut(item) {
      console.log(item)
      if(!item) {
        return item;
      } else {
        return item.split(' ').slice(0,8).join(' ') + " ..."
      }
    }
  
    function descriptionCut(item) {
      if(!item) {
        return item;
      } else {
        return item.split(' ').slice(0,20).join(' ') + " ..."
      }
    }
  
  return (
    <Link to={`/${props.mainNews.title}`} className={classes.wrapper}>
      <div className={classes.mainNewsImage}>
        <img src={props.mainNews.urlToImage} alt={'main_news'} className={classes.mainNewsImage} />
      </div>
      <div className={classes.content}>
        <h3>{titleCut(props.mainNews.title)}</h3>
        <p>{descriptionCut(props.mainNews.description) || <LoremIpsum avgWordsPerSentence={1} />}</p>
        <div className={classes.footer}>
          <span className={classes.date}>{formatDate(props.mainNews.date)}</span>
          <span className={classes.readMore}>Read more...</span>
        </div>
      </div> 
    </Link>
  );
}


export default MainNews;