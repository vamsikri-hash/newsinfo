import React, { Fragment } from "react";
import PropTypes from "prop-types";

const NewsItem = ({ newsitem: { source, author, title, url, urlToImage } }) => {
  return (
    <div className="card text-center">
      <img src={urlToImage} alt="" style={{ width: "400px" }} />
      <ul>
        {" "}
        <li>
          {title && (
            <Fragment>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {" "}
                {title}
              </a>
            </Fragment>
          )}
        </li>
        <li>
          {source.name && (
            <Fragment>
              <strong>Source</strong>:{source.name}
            </Fragment>
          )}
        </li>
        <li>
          {author && (
            <Fragment>
              <strong>Author</strong>:{author}
            </Fragment>
          )}
        </li>
      </ul>
    </div>
  );
};

NewsItem.propTypes = {
  newsitem: PropTypes.object.isRequired
};
export default NewsItem;
