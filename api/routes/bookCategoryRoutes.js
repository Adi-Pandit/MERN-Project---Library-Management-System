const express = require("express");
const validateToken = require("../middleware/validationTokenHandler");
const {
    getBookCategories,
    createBookCategory,
    getBookCategory,
    updateBookCategory,
    deleteBookCategory,
} = require("../controllers/bookCategoryController");

const router = express.Router();

router
    .route("/")
    .get(validateToken, getBookCategories)
    .post(validateToken, createBookCategory);

router
    .route("/:id")
    .get(validateToken, getBookCategory)
    .put(validateToken, updateBookCategory)
    .delete(validateToken, deleteBookCategory);

module.exports = router;
