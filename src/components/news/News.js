import React from "react";
import Spinner from "../layout/Spinner";
import NewsItem from "./NewsItem";

const News = ({ newsarray, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    let i = 0;
    return (
      <div style={newsStyle}>
        {newsarray.map(newsitem => (
          <NewsItem key={i++} newsitem={newsitem} />
        ))}
      </div>
    );
  }
};

const newsStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "1rem"
};
export default News;
