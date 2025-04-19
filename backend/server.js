require("dotenv").config();
const connectDB = require("./config/db");
const express = require('express');
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/job", jobRoutes);
app.listen(5500,()=>{
    console.log("Server is running at 5500");
});
// server.listen(4000,()=>{
//     console.log("Server runnung at port 4000");
// })