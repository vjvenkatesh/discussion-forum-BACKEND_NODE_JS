const userModel = require("../models/user.model.js");

const getUsers = async (req, res) => {
  try {
    const userRecords = await userModel.find({});
    if (userRecords.length < 1) {
      res.status(403).json({ message: "No Users found" });
    } else {
      res.status(200).json(userRecords);
    }
  } catch (err) {
    console.log("err ", err);
  }
};

const createUsers = async (req, res) => {
  try {
    const body = req.body;
    const newUser = await userModel.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({
      message: "Couldn't create new blog post. Please try again",
      error,
    });
  }
};

const getMatchedUser = async (req,res) => {
  const {username}=req.params;
  console.log("username >",username);
  try {
    const userRecords = await userModel.findOne({username});

    console.log(userRecords);
    if (userRecords === null) {
      res.status(403).json({ message: "User not found!", username });
    } else {
      res.status(200).json(userRecords);
    }
  } catch (err) {
    console.log("Error ", err);
    res.status(500).json({
      message: "Couldn't get any data",
      err
    });
  }
};
module.exports = { getUsers, createUsers ,getMatchedUser};
