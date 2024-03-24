const express = require("express");
const validateToken = require("../middleware/validationTokenHandler");
const {
    getBookDetails,
    createBookDetail,
    getBookDetail,
    updateBookDetail,
    deleteBookDetail,
} = require("../controllers/bookDetailsController");

const router = express.Router();

router
    .route("/")
    .get(validateToken, getBookDetails)
    .post(validateToken, createBookDetail);

router
    .route("/:id")
    .get(validateToken, getBookDetail)
    .put(validateToken, updateBookDetail)
    .delete(validateToken, deleteBookDetail);

module.exports = router;
