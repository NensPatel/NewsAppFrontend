import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const category = props.category;
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/news?category=${category}&page=${page}`
      );
      const data = await response.json();
      setArticles([...articles, ...data.articles]);
      setTotalResults(data.totalResults);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, page]);

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchData}
      hasMore={totalResults === null || articles.length < totalResults}
      loader={<h4>Loading...</h4>}
    >
      <div className="container my-3">
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                sourceName={element.source?.name}
                title={element.title}
                desc={element.description}
                imageURL={element.urlToImage || "Image"}
                newsUrl={element.url}
                author={element.author}
              />
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default News;
