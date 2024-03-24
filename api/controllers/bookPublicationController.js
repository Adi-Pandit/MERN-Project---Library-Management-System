const asyncHandler = require("express-async-handler");
const BookPublication = require("../models/bookPublicationModel");

//@desc Get all book publications
//@route GET /api/book/publications
//@access private
const getBookPublications = asyncHandler(async (req, res) => {
    const bookPublications = await BookPublication.find();
    res.status(200).json(bookPublications);
});

//@desc Create new book publication
//@route POST /api/book/publications
//@access private
const createBookPublication = asyncHandler(async (req, res) => {
    const { publication_name } = req.body;
    if (!publication_name) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    bookPublication = await BookPublication.create({ publication_name });
    res.status(201).json(bookPublication);
});

//@desc Get book publication
//@route GET /api/book/publications/:id
//@access private
const getBookPublication = asyncHandler(async (req, res) => {
    const bookPublication = await BookPublication.findById(req.params.id);
    if (!bookPublication) {
        res.status(400);
        throw new Error("Book publication not found");
    }
    res.status(200).json(bookPublication);
});

//@desc Update book publication
//@route PUT /api/book/publications/:id
//@access private
const updateBookPublication = asyncHandler(async (req, res) => {
    const bookPublication = await BookPublication.findById(req.params.id);
    if (!bookPublication) {
        res.status(400);
        throw new Error("Book publication not found");
    }
    const updatedBookPublication = await BookPublication.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedBookPublication);
});

//@desc Delete book publication
//@route DELETE /api/book/publications/:id
//@access private
const deleteBookPublication = asyncHandler(async (req, res) => {
    const bookPublication = await BookPublication.findById(req.params.id);
    if (!bookPublication) {
        res.status(400);
        throw new Error("Book publication not found");
    }
    await BookPublication.deleteOne({ _id: req.params.id });
    res.status(200).json({
        message: `Deleted book publication for id ${req.params.id}`,
    });
});

module.exports = {
    getBookPublications,
    createBookPublication,
    getBookPublication,
    updateBookPublication,
    deleteBookPublication,
};
