const BlogPostRepository = require("../../database/models/BlogPostRepository");

const postRepo = new BlogPostRepository();

// Créer un nouvel article de blog
const create = async (req, res) => {
  const { title, content, author } = req.body;
  // Récupérer l'image téléchargée via Multer
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const newPostId = await postRepo.create({
      title,
      content,
      author,
      imageUrl, // Utilisation de l'URL de l'image
    });
    return res.status(201).json({ id: newPostId });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la création de l'article",
      error,
    });
  }
};

// Récupérer un article de blog par ID
const read = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postRepo.read(id);
    if (!post) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération de l'article",
      error,
    });
  }
};

// Récupérer tous les articles de blog
const browse = async (req, res) => {
  try {
    const posts = await postRepo.readAll();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des articles",
      error,
    });
  }
};

// Mettre à jour un article de blog existant
const update = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  // Récupérer l'image téléchargée via Multer, sinon conserver l'ancienne
  const imageUrl = req.file
    ? `/uploads/${req.file.filename}`
    : req.body.imageUrl;

  try {
    const affectedRows = await postRepo.update({
      id,
      title,
      content,
      author,
      imageUrl, // Utilisation de l'URL de l'image
    });
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    return res.status(200).json({ message: "Article mis à jour avec succès" });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la mise à jour de l'article",
      error,
    });
  }
};

// Supprimer un article de blog par ID
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await postRepo.delete(id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    return res.status(200).json({ message: "Article supprimé avec succès" });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la suppression de l'article",
      error,
    });
  }
};

module.exports = { create, read, browse, update, deletePost };
