const mongoose = require("mongoose");

const bookDetailsSchema = mongoose.Schema(
    {
        isbn_code: {
            type: String,
            unique: true,
            required: true,
        },
        book_title: {
            type: String,
            unique: true,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        number_copies_actual: {
            type: Number,
            required: true,
        },
        number_copies_current: {
            type: Number,
            required: true,
        },
        publication: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "bookpublications",
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "bookcategories",
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "bookauthors",
            required: true,
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("BookDetails", bookDetailsSchema);
