import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./styles/ManageArticle.css";
import Footer from "../components/Footer";

function ManageArticle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState({
    title: "",
    content: "",
    author: "",
    imageUrl: "",
    createdAt: "",
    updatedAt: "",
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3310/api/blog/${id}`)
        .then((response) => response.json())
        .then((data) => setArticle(data))
        .catch((error) => console.error("Error fetching article:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setArticle({ ...article, imageUrl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", article.title);
    formData.append("content", article.content);
    formData.append("author", article.author);
    if (imageFile) {
      formData.append("imageFile", imageFile);
    }

    const method = id ? "PUT" : "POST";
    const url = id
      ? `http://localhost:3310/api/blog/${id}`
      : "http://localhost:3310/api/blog";

    fetch(url, {
      method,
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(id ? "Article updated:" : "Article created:", data);
        navigate("/redirect", {
          state: { action: id ? "updated" : "created" }, // Passer l'état
        });
      })
      .catch((error) => console.error("Error saving article:", error));
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      fetch(`http://localhost:3310/api/blog/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            console.log("Article deleted");
            navigate("/redirect", {
              state: { action: "deleted" }, // Passer l'état
            });
          } else {
            console.error("Error deleting article");
          }
        })
        .catch((error) => console.error("Error deleting article:", error));
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={article.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={article.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={article.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="imageFile">Upload Image:</label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {article.imageUrl && (
          <div>
            <img
              src={article.imageUrl}
              alt="Article Preview"
              style={{ width: "200px", height: "auto", marginTop: "10px" }}
            />
          </div>
        )}
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={article.content}
            onChange={handleChange}
          />
        </div>

        <button type="submit">{id ? "Save" : "Create"}</button>

        {id && (
          <>
            <button
              type="button"
              onClick={handleDelete}
              className="delete-button"
            >
              Delete
            </button>

            {/* Bouton pour voir l'article */}
            <button
              type="button"
              onClick={() => navigate(`/article/${id}`)} // Redirige vers la page de visualisation
              className="view-article-button"
            >
              See on the website
            </button>
          </>
        )}
      </form>
      <div className="managearticle__footer">
        <Footer />
      </div>
    </>
  );
}

export default ManageArticle;
