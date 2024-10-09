import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "./styles/BlogCards.css";

function BlogCards() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate(); // Utilisation de useNavigate pour rediriger

  useEffect(() => {
    fetch("http://localhost:3310/api/blog")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  // Fonction pour rediriger vers la page de création d'article
  const handleAddArticleClick = () => {
    navigate("/manage-article"); // Redirection vers le formulaire vide de création
  };

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

      {/* Ajout d'une carte pour ajouter un nouvel article */}
      <div
        className="article-card add-article-card"
        onClick={handleAddArticleClick}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleAddArticleClick();
          }
        }}
        role="button" // Définir un rôle explicite
        tabIndex={0} // Rendre l'élément focusable au clavier
      >
        <div className="add-article-card__content">
          <div className="add-article-card__icon">+</div>
          <div className="add-article-card__title">Add Article</div>
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
