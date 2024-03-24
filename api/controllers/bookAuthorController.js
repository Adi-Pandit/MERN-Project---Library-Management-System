const asyncHandler = require("express-async-handler");
const BookAuthor = require("../models/bookAuthorModel");

//@desc Get all book authors
//@route GET /api/book/authors
//@access private
const getBookAuthors = asyncHandler(async (req, res) => {
    const bookAuthors = await BookAuthor.find();
    res.status(200).json(bookAuthors);
});

//@desc Create new book author
//@route POST /api/book/authors
//@access private
const createBookAuthor = asyncHandler(async (req, res) => {
    const { author_name } = req.body;
    if (!author_name) {
        res.json(400);
        throw new Error("All fields are mandatory !");
    }
    const bookAuthor = await BookAuthor.create({ author_name });
    res.status(201).json(bookAuthor);
});

//@desc Get book author
//@route GET /api/book/authors/:id
//@access private
const getBookAuthor = asyncHandler(async (req, res) => {
    const bookAuthor = await BookAuthor.findById(req.params.id);
    if (!bookAuthor) {
        res.json(400);
        throw new Error("Book author not found");
    }
    res.status(200).json(bookAuthor);
});

//@desc Update book author
//@route PUT /api/book/authors/:id
//@access private
const updateBookAuthor = asyncHandler(async (req, res) => {
    const bookAuthor = await BookAuthor.findById(req.params.id);
    if (!bookAuthor) {
        res.json(400);
        throw new Error("Book author not found");
    }
    const updatedBookAuthor = await BookAuthor.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedBookAuthor);
});

//@desc Delete book author
//@route DELETE /api/book/authors/:id
//@access private
const deleteBookAuthor = asyncHandler(async (req, res) => {
    const bookAuthor = await BookAuthor.findById(req.params.id);
    if (!bookAuthor) {
        res.status(400);
        throw new Error("Book author not found");
    }
    await BookAuthor.deleteOne({ _id: req.params.id });
    res.status(200).json({
        message: `Deleted book author with id ${req.params.id}`,
    });
});

module.exports = {
    getBookAuthors,
    createBookAuthor,
    getBookAuthor,
    updateBookAuthor,
    deleteBookAuthor,
};
