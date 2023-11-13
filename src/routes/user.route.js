const express = require("express");
const router = express.Router();
const {getUsers,createUsers, getMatchedUser}=require("../controller/user.controller.js")
const { verifyAuth } = require("../middlewares/verifyAuth.js");


router.use(verifyAuth);

router.get("/:username",getMatchedUser);
router.get("/all", getUsers);
router.post("/register",createUsers);



module.exports = router;
