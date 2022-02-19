import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div
        className={`card text-${props.mode === "dark" ? "light" : "dark"} bg-${
          props.mode
        } card-shadow`}>
        <span
          className={`position-absolute top-0 translate-middle badge rounded-pill bg-${
            props.mode === "dark" ? "light" : "dark"
          } text-${props.mode}`}
          style={{ left: "50%", zIndex: "1" }}>
          {source}
        </span>
        <img src={imageUrl} className="card-img-top card-image" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className={`btn btn-sm shadow-none btn-${
              props.mode === "dark" ? "light" : "dark"
            }`}>
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
