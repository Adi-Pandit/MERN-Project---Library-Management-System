const express = require("express");
const validateToken = require("../middleware/validationTokenHandler");
const {
    getBookAuthors,
    createBookAuthor,
    getBookAuthor,
    updateBookAuthor,
    deleteBookAuthor,
} = require("../controllers/bookAuthorController");

const router = express.Router();

router
    .route("/")
    .get(validateToken, getBookAuthors)
    .post(validateToken, createBookAuthor);

router
    .route("/:id")
    .get(validateToken, getBookAuthor)
    .put(validateToken, updateBookAuthor)
    .delete(validateToken, deleteBookAuthor);

module.exports = router;
