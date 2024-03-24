const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/book/categories", require("./routes/bookCategoryRoutes"));
app.use("/api/book/publications", require("./routes/bookPublicationRoutes"));
app.use("/api/book/authors", require("./routes/bookAuthorRoutes"));
app.use("/api/book/details", require("./routes/bookDetailsRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
});
