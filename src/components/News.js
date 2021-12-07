import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props); //use props in both brackets to use props in constructor
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      hasMore: true
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
  }

  async updateNews() {
    this.props.progress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    this.props.progress(30);
    let data = await fetch(url); //using async await to wait till it resolves the fetch function and then run the code.
    let parsedData = await data.json();
    this.props.progress(75);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.progress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async()=>{
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({hasMore:true})
    let data = await fetch(url); //using async await to wait till it resolves the fetch function and then run the code
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      hasMore:false
    });
    this.setState({hasMore:false})
  }

  render() {
    return (
      <>
        <h1 className={` my-4 text-center text-${this.props.mode === "dark" ? "light" : "dark"}`}>
          News Monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader = {this.state.hasMore && <Spinner/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
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
                      mode={this.props.mode}
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
}

export default News;