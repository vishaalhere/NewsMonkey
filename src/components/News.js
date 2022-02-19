import React, {useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=>{
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const updateNews = async()=> {
    props.progress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.progress(30);
    let data = await fetch(url); //using async await to wait till it resolves the fetch function and then run the code.
    let parsedData = await data.json();
    props.progress(75);
    setArticles(await parsedData.articles);
    setTotalResults(await parsedData.totalResults);
    setLoading(false);
    props.progress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  

  const fetchMoreData = async()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);

    setHasMore(true);

    let data = await fetch(url); //using async await to wait till it resolves the fetch function and then run the code
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    setHasMore(false);
  }

  
    return (
      <>
        <h1 className={` text-center text-${props.mode === "dark" ? "light" : "dark"}`} style={{ marginTop: '4.5rem' }}>
          News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader = {hasMore && <Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={element.description? element.description.slice(0, 88): ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      mode={props.mode}
                    />
                  </div>
              );
            })}
            </div>
          </div>
          </InfiniteScroll>
        </>
        );
      }

export default News;



News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};