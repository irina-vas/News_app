import React from 'react';
import classes from './NewsCards.module.css';
import { Link } from 'react-router-dom';
import LoremIpsum from 'react-lorem-ipsum'


function NewsCards(props) {
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
    } else if (day === '03') {
      day = day + 'rd'
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
      return item.split(' ').slice(0,10).join(' ') + " ..."
    }
  }

  function descriptionCut(item) {
    if(!item) {
      return item;
    } else {
      return item.split(' ').slice(0,22).join(' ') + " ..."
    }
  }


  return (
    <div className={classes.wrapper}> 
      {props.news.map(item => 
        <Link to={`/${item.title}`} className={classes.newsCard}>
          <div className={classes.newsImage}>
            <img src={item.urlToImage} />
          </div>
          <h4 className={classes.newsHeadline}>{titleCut(item.title)}</h4>
          <p className={classes.newsDescription}>{descriptionCut(item.description)}</p>
          <div className={classes.newsFooter}>
            <span className={classes.newsDate}>{formatDate(item.publishedAt)}</span>
            <span className={classes.footerItem}>Read more</span>
          </div>
        </Link>
      )}
    </div>
  );
}


export default NewsCards;