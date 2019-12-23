const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
// const validatePostInput = require("../../validation/post");
/* 
    @route  GET api/posts
    @desc   Test route
    @access Public
*/

router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
