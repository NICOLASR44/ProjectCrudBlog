import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import "./styles/BlogCards.css";

function BlogCards() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/blog")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="blog-cards">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          articleId={article.id}
          title={article.title}
          imageUrl={article.imageUrl}
        />
      ))}
    </div>
  );
}

export default BlogCards;
