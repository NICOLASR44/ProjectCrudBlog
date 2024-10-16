const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const blogRouter = require("./blog/router");

router.use("/items", itemsRouter);

router.use("/blog", blogRouter);

/* ************************************************************************* */

module.exports = router;
