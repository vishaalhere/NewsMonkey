import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="my-3">
          <div className={`card text-${this.props.mode==='dark'?'light':'dark'} bg-${this.props.mode}`} style={{ width: "18rem" }}>
          <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${this.props.mode==='dark'?'light':'dark'} text-${this.props.mode}`} style={{left : '50%', zIndex:'1'}}>{source}
          </span>
            <img src={imageUrl} className="card-img-top" alt=".." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                href={newsUrl}
                rel="noreferrer"
                target="_blank"
                className={`btn btn-sm shadow-none btn-${this.props.mode==='dark'?'light':'dark'}`}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
    
  }
}

export default NewsItem;
