const asyncHandler = require("express-async-handler");
const BookCategory = require("../models/bookCategoryModel");

//@desc Get all book categories
//@route GET /api/book/categories
//@access private
const getBookCategories = asyncHandler(async (req, res) => {
    const bookCategories = await BookCategory.find();
    res.status(200).json(bookCategories);
});

//@desc Create new book category
//@route POST /api/book/categories
//@access private
const createBookCategory = asyncHandler(async (req, res) => {
    const { category_name } = req.body;
    if (!category_name) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const bookCategory = await BookCategory.create({ category_name });
    res.status(201).json(bookCategory);
});

//@desc Get book category
//@route GET /api/book/categories/:id
//@access private
const getBookCategory = asyncHandler(async (req, res) => {
    const bookCategory = await BookCategory.findById(req.params.id);
    if (!bookCategory) {
        res.status(404);
        throw new Error("Book category not found");
    }
    res.status(200).json(bookCategory);
});

//@desc Update book categories
//@route PUT /api/book/categories/:id
//@access private
const updateBookCategory = asyncHandler(async (req, res) => {
    const bookCategory = await BookCategory.findById(req.params.id);
    if (!bookCategory) {
        res.status(404);
        throw new Error("Book category not found");
    }
    const updatedBookCategory = await BookCategory.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedBookCategory);
});

//@desc Delete book categories
//@route DELETE /api/book/categories/:id
//@access private
const deleteBookCategory = asyncHandler(async (req, res) => {
    const bookCategory = await BookCategory.findById(req.params.id);
    if (!bookCategory) {
        res.status(404);
        throw new Error("Book category not found");
    }
    await BookCategory.deleteOne({ _id: req.params.id });
    res.status(200).json({
        message: `Deleted book category for id: ${req.params.id}`,
    });
});

module.exports = {
    getBookCategories,
    createBookCategory,
    getBookCategory,
    updateBookCategory,
    deleteBookCategory,
};
