const express = require("express");
const validateToken = require("../middleware/validationTokenHandler");
const {
    getBookPublications,
    createBookPublication,
    getBookPublication,
    updateBookPublication,
    deleteBookPublication,
} = require("../controllers/bookPublicationController");

const router = express.Router();

router
    .route("/")
    .get(validateToken, getBookPublications)
    .post(validateToken, createBookPublication);

router
    .route("/:id")
    .get(validateToken, getBookPublication)
    .put(validateToken, updateBookPublication)
    .delete(validateToken, deleteBookPublication);

module.exports = router;
