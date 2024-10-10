const fs = require("fs");
const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Configuration de Multer pour stocker les images dans un dossier spécifique
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/";

    // Vérifie si le dossier existe, sinon le crée
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // Crée le dossier s'il n'existe pas
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nom unique pour l'image
  },
});

const upload = multer({ storage });

// Import des actions du contrôleur liées au blog
const {
  browse,
  read,
  create,
  update,
  deletePost,
} = require("../../../controllers/blogActions");

// Route pour récupérer une liste des posts de blog
router.get("/", browse);

// Route pour récupérer un post spécifique par son ID
router.get("/:id", read);

// Route pour créer un nouveau post de blog (possibilité d'ajouter une image)
router.post("/", upload.single("imageFile"), create);

// Route pour mettre à jour un post existant par son ID (gestion de l'upload d'image)
router.put("/:id", upload.single("imageFile"), update);

// Route pour supprimer un post par son ID
router.delete("/:id", deletePost);

module.exports = router;
