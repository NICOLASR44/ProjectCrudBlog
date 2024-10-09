import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ManageArticle() {
  const { id } = useParams(); // Récupère l'ID de l'article depuis l'URL
  const [article, setArticle] = useState({
    title: "",
    content: "",
    author: "",
    imageUrl: "",
  });

  useEffect(() => {
    // Fetch les détails de l'article en utilisant l'ID
    fetch(`http://localhost:3310/api/blog/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>
        <strong>Author:</strong> {article.author}
      </p>
      <p>
        <strong>Content:</strong> {article.content}
      </p>
    </div>
  );
}

export default ManageArticle;
