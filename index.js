const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./router/user");
const { json } = require("body-parser");


dotenv.config();


mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB is Connected!"))
.catch((err) =>{
    console.log(err);
});

app.use(express,json());
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000,() =>{
    console.log("Backend Server is running!")
})