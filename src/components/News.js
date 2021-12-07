import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize:8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:  PropTypes.string,
  }
  
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);  //use props in both brackets to use props in constructor
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      mode: 'light'
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
  }

  async updateNews(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6faf6dd832d74820a82ad0b4386539b9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url); //using async await to wait till it resolves the fetch function and then run the code.
    
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  handlePreviousClick = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  render() {
    console.log(this.state.articles);
    return (
      
      <div className='container my-3'>
        <h1 className={`text-center text-${this.props.mode==='dark'?'light':'dark'}`}>News Monkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>} 
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  mode={this.props.mode}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page === 1}
            type="button"
            className="btn btn-outline-dark"
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-outline-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default News;
