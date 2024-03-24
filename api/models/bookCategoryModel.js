const mongoose = require("mongoose");

const bookCategorySchema = mongoose.Schema(
    {
        category_name: {
            type: String,
            unique: true,
            required: true,
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("BookCategory", bookCategorySchema);
