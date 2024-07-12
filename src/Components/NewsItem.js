import React from "react";
import { Link } from "react-router-dom";

function NewsItem(props) {
  let { desc, title, imageURL, newsUrl, sourceName, author } = props;
  return (
    <div className="card my-3 cards">
      <img src={imageURL} className="card-img-top fixed-size-img" alt="..." />
      <div className="card-body half-card-body">
        <h5 className="card-title truncate-3 text-uppercase  text-white">
          {title}
        </h5>
        <p className="w-100 fs-6 text-body-secondary text-end  text-white">
          - <em>{sourceName}</em>
        </p>
        <p className="card-text text-muted truncate-3">{desc}</p>
        <Link to={newsUrl} target="_blank">
          <button>Read More...</button>
        </Link>
        <hr className="text-white" />
        <span className="text-white">
          <em>Author Name: {author}</em>
        </span>
      </div>
    </div>
  );
}

export default NewsItem;
