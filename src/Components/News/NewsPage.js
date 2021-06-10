import React, { useState, useEffect } from 'react';
import classes from './NewsPage.module.css';
import  { useParams } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';


function NewsPage() {
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
    console.log(date);
  }

  function dateFormater(item) {
    if(!item) {
      return item;
    } else {
      return formatDate(item)
    }
  }


  const [news,setNews] = useState({});
  const {title} = useParams();
  useEffect(()=> {
    console.log('kkkk')
    fetch(`https://webit-news-search.p.rapidapi.com/search?q=${title.slice(0,20)}&language=en&number=8&offset=0`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "5aacafb4c2msh5ea2fe79d5cddd5p1e3d86jsnbf0548a061ba",
        "x-rapidapi-host": "webit-news-search.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(data => {
      setNews(data.data.results[0]);
      // setLoading(false);
      console.log(data.data.results[0])
    }).catch(err => {
      console.error(err);
    });
  },[])

  return (
  <div className={classes.wrapper}>
    <div className={classes.newsImage}><img alt='' src={news.image}/></div>
    <div className={classes.content}>
      <h1 className={classes.headline}>{news.title}</h1>
      <div className={classes.authorAndDate}>
        <span className={classes.author}>Written by {news.author}</span>
         {console.log(news.date)}
        <span className={classes.date}>{dateFormater(news.date)}</span>
      </div>
        <div className={classes.description}>{news.description}</div>
        <div className={classes.description}>
          <LoremIpsum p={4} />
        </div>
    </div>
  </div>
  );
}


export default NewsPage;