const asyncHandler = require("express-async-handler");
const BookDetails = require("../models/bookDetailsModel");

//@desc Get all book details
//@route GET /api/book/details
//@access private
const getBookDetails = asyncHandler(async (req, res) => {
    const bookDetails = await BookDetails.find();
    res.status(200).json(bookDetails);
});

//@desc Create new book detail
//@route POST /api/book/details
//@access private
const createBookDetail = asyncHandler(async (req, res) => {
    const {
        isbn_code,
        book_title,
        language,
        number_copies_actual,
        number_copies_current,
        publication,
        category,
        author,
    } = req.body;

    if (
        !isbn_code ||
        !book_title ||
        !language ||
        !number_copies_actual ||
        !number_copies_current ||
        !publication ||
        !category ||
        !author
    ) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const bookDetail = await BookDetails.create({
        isbn_code,
        book_title,
        language,
        number_copies_actual,
        number_copies_current,
        publication,
        category,
        author,
    });
    res.status(201).json(bookDetail);
});

//@desc Get book detail
//@route GET /api/book/details/:id
//@access private
const getBookDetail = asyncHandler(async (req, res) => {
    const bookDetail = await BookDetails.findById(req.params.id);

    if (!bookDetail) {
        res.status(404);
        throw new Error("Book details not found");
    }

    res.status(200).json(bookDetail);
});

//@desc Update book detail
//@route PUT /api/book/detail/:id
//@access private
const updateBookDetail = asyncHandler(async (req, res) => {
    const bookDetail = await BookDetails.findById(req.params.id);

    if (!bookDetail) {
        res.status(404);
        throw new Error("Book details not found");
    }

    const updatedBookDetail = await BookDetails.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedBookDetail);
});

//@desc Delete book detail
//@route DELETE /api/book/details/:id
//@access private
const deleteBookDetail = asyncHandler(async (req, res) => {
    const bookDetail = await BookDetails.findById(req.params.id);

    if (!bookDetail) {
        res.status(404);
        throw new Error("Book details not found");
    }

    await BookDetails.deleteOne({ _id: req.params.id });
    res.status(200).json({
        message: `Delete book details for id: ${req.params.id}`,
    });
});

module.exports = {
    getBookDetails,
    createBookDetail,
    getBookDetail,
    updateBookDetail,
    deleteBookDetail,
};
