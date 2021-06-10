import './App.css';
import React, {useState, useEffect} from 'react';
import MainNews from './Components/News/MainNews';
import NewsCards from './Components/News/NewsCards';
import Footer from './Components/Footer';
import classes from './App.css';
import Loader from './Common/Loader';
import ScrollButton from './Common/ScrollButton';
import Navbar from './Components/Header/Navbar';
import NewsPage from './Components/News/NewsPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as axios from 'axios';


function App() {
  const [news, setNewNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('trending');

  useEffect(()=> {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ecc994e312c448babfe15593b12535bf';
    axios.get(url)
      .then(response => response)
      .then(data => {
        console.log(data.data.articles);
        setNewNews(data.data.articles);
        setLoading(false);
      }).catch(error => console.error(error))


  //   fetch(`https://webit-news-search.p.rapidapi.com/${category}&language=en&number=8&offset=0`, {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-key": "5aacafb4c2msh5ea2fe79d5cddd5p1e3d86jsnbf0548a061ba",
  //       "x-rapidapi-host": "webit-news-search.p.rapidapi.com"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data.data.results);
  //     setNewNews(data.data.results);
  //     setLoading(false);
  //   }).catch(err => {
	// console.error(err);
  //   });
  },[category])
  
  let filterArray = news.slice(1).filter((item) => {

    if(item.title.includes(search)) {                
      return true; 
    }
  });
  // console.log(filterArray);
  

  return (
    <BrowserRouter>
      <div className="wrapper">
        <header className={classes.header}>
          <Navbar search={search} setSearch={setSearch} setCategory={setCategory} />
        </header>

        <Switch>
          <Route path="/:title">
          {loading 
            ? (<div className="loader__wrapper"><Loader /></div>) 
            : (
                <NewsPage />
              )
          }  
          </Route>

          <Route path="/">
            <main>
              {loading 
                ? (<div className="loader__wrapper"><Loader /></div>) 
                : (<>
                    {/* <MainNews mainNews={news[0]} />   */}
                    <NewsCards news={filterArray} />
                  </>)
              }
              <ScrollButton />
            </main>
          </Route>
        </Switch>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
