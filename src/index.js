require("dotenv").config();
const express = require("express");
const routes = require("./routes/user.route");
const mongoose = require("mongoose");
const config = require("./config/config");
const app = express();

app.use(express.json());

// const { verifyAuth } = require("./middlewares/verifyAuth.js");
// app.use(verifyAuth);

app.use("/user", routes);



mongoose.connect(config.mongoose.url).then(() => {
  console.log("Connected to MongoDB"); 
  app.listen(config.port, () => {
    console.log(`App is running on port ${config.port}`);
  });
});

