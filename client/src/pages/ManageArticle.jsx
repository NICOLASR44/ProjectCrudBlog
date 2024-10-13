import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./styles/ManageArticle.css";
import Footer from "../components/Footer";
import branchLeft from "../assets/images/branchLeft.png";
import branchRight from "../assets/images/branchRight.png";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal"; // Importation de la modal

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
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer l'ouverture de la modal

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

  const handleRemoveImage = () => {
    setImageFile(null); // Réinitialiser le fichier d'image sélectionné
    setArticle({ ...article, imageUrl: "" }); // Réinitialiser l'URL de l'image dans l'article
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", article.title);
    formData.append("content", article.content);
    formData.append("author", article.author);

    if (imageFile) {
      formData.append("imageFile", imageFile);
    } else if (article.imageUrl) {
      formData.append("imageUrl", article.imageUrl);
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
      .then(() => {
        navigate("/redirect", {
          state: { action: id ? "updated" : "created" }, // Passer l'état
        });
      })
      .catch((error) => console.error("Error saving article:", error));
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true); // Ouvre la modal
  };

  const handleConfirmDelete = () => {
    setIsModalOpen(false); // Ferme la modal
    fetch(`http://localhost:3310/api/blog/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          navigate("/redirect", {
            state: { action: "deleted" }, // Passer l'état
          });
        } else {
          console.error("Error deleting article");
        }
      })
      .catch((error) => console.error("Error deleting article:", error));
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false); // Ferme la modal si l'utilisateur annule
  };

  // Effet parallax pour les branches
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const branchLeftImg = document.querySelector(".branch-left");
      const branchRightImg = document.querySelector(".branch-right");

      if (branchLeftImg && branchRightImg) {
        branchLeftImg.style.transform = `translateX(-${scrollPosition * 0.5}px) translateY(-50%)`; // Déplacement horizontal de droite à gauche
        branchRightImg.style.transform = `translateX(${scrollPosition * 0.5}px) translateY(-50%)`; // Déplacement horizontal de gauche à droite
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="parallax">
        <img src={branchLeft} alt="Left Branch" className="branch-left" />
        <img src={branchRight} alt="Right Branch" className="branch-right" />
      </div>
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
        <div className="center-container">
          <div>
            <label htmlFor="imageFile" className="custom-upload-button">
              Choose a file
            </label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              accept="image/*"
              className="upload__input"
              onChange={handleImageChange}
            />
          </div>
          {article.imageUrl && (
            <div className="image-container">
              <img
                style={{ width: "200px", height: "auto", marginTop: "10px" }}
                src={article.imageUrl}
                alt="Article Preview"
                className="image-preview"
              />
              <button
                type="button"
                className="remove-image-button"
                onClick={handleRemoveImage}
              >
                &times;
              </button>
            </div>
          )}
        </div>
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
              onClick={handleDeleteClick} // Ouvre la modal
              className="delete-button"
            >
              Delete
            </button>

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

      {/* Modal de confirmation de suppression */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />

      <Footer />
    </>
  );
}

export default ManageArticle;
