import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/ViewArticle.css";

function ViewArticle() {
  const { id } = useParams(); // Récupérer l'ID de l'article depuis l'URL
  const [article, setArticle] = useState(null); // Stocker l'article

  useEffect(() => {
    fetch(`http://localhost:3310/api/blog/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);

  if (!article) {
    return <div>Chargement...</div>; // Afficher un message pendant le chargement
  }

  return (
    <>
      <Navbar />
      <div className="view-article-container">
        <h1 className="view-article-title">{article.title}</h1>
        <p className="view-article-author">Write by : {article.author}</p>
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="view-article-image"
          />
        )}
        <p className="view-article-content">{article.content}</p>
      </div>
      <Footer />
    </>
  );
}

export default ViewArticle;
