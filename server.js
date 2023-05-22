const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const socket = require("socket.io");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
require("dotenv").config();
const db = require("./config/db");

db();
const PORT = 5000 || process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// * Routes

app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
