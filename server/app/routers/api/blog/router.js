const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Blog API Routes Here
/* ************************************************************************* */

// Import blog-related actions
const {
  browse,
  read,
  create,
  update,
  deletePost,
} = require("../../../controllers/blogActions");

// Route to get a list of blog posts
router.get("/", browse);

// Route to get a specific blog post by ID
router.get("/:id", read);

// Route to create a new blog post
router.post("/", create);

// Route to update an existing blog post by ID
router.put("/:id", update);

// Route to delete a blog post by ID
router.delete("/:id", deletePost);

/* ************************************************************************* */

module.exports = router;
