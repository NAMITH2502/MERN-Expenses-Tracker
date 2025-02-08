const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./router/categoryRouter");
const transactionRouter = require("./router/transactionRouter");

//!instance
const app = express();
const PORT = process.env.PORT || 8000;

//!Connect to mongodb
mongoose.connect("mongodb+srv://namithp:<db_password>@namithp.lg82p.mongodb.net/MERN-Expenses-Tracker")
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err));

//!cors config
const corsOption = {
    origin: ['http://localhost:5173'],
}
app.use(cors(corsOption));

//!Middlewares
app.use(express.json()); //?Pass incoming json data

//!Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

//! Error
app.use(errorHandler);

//!Start the server
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));

