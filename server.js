const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const path = require("path");

const connectDb = require("./config/db")

dotenv.config({path: './config/config.env'});
const products = require("./routes/products");

connectDb();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', products) 

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} on port ${PORT}`))