const mongoose = require("mongoose");

const bookAuthorSchema = mongoose.Schema(
    {
        author_name: {
            type: String,
            unique: true,
            required: true,
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("BookAuthor", bookAuthorSchema);
