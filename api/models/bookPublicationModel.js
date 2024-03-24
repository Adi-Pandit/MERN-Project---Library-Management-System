const mongoose = require("mongoose");

const bookPublicationSchema = mongoose.Schema(
    {
        publication_name: {
            type: String,
            unique: true,
            required: true,
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("BookPublication", bookPublicationSchema);
