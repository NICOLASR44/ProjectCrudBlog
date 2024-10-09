import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/ManageArticle.css";

function ManageArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState({
    title: "",
    content: "",
    author: "",
    imageUrl: "",
    createdAt: "",
    updatedAt: "", // Ajout de updatedAt
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/blog/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error("Error fetching article:", error));
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

    const updatedArticle = {
      title: article.title,
      content: article.content,
      author: article.author,
      imageUrl: article.imageUrl,
    };

    if (imageFile) {
      const formData = new FormData();
      formData.append("title", article.title);
      formData.append("content", article.content);
      formData.append("author", article.author);
      formData.append("imageFile", imageFile);

      fetch(`http://localhost:3310/api/blog/${id}`, {
        method: "PUT",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Article updated with image:", data);
        })
        .catch((error) => console.error("Error updating article:", error));
    } else {
      fetch(`http://localhost:3310/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedArticle),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Article updated:", data);
        })
        .catch((error) => console.error("Error updating article:", error));
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
        <div>
          <label htmlFor="createdAt">Created At:</label>
          <input
            type="text"
            id="createdAt"
            name="createdAt"
            value={new Date(article.createdAt).toLocaleString()}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="updatedAt">Updated At:</label>
          <input
            type="text"
            id="updatedAt"
            name="updatedAt"
            value={new Date(article.updatedAt).toLocaleString()}
            readOnly
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ManageArticle;
