import React from "react";
import Spinner from "../layout/Spinner";
import NewsItem from "./NewsItem";

const News = ({ newsarray, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    let i = 0;
    return (
      <div className="grid-style">
        {newsarray.map(newsitem => (
          <NewsItem key={i++} newsitem={newsitem} />
        ))}
      </div>
    );
  }
};

export default News;
