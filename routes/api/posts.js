const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const User = require("../../models/User");
const Profile = require("../../models/Profile");
/* 
    @route  POST api/posts
    @desc   Create a post
    @access Private
*/

router.post(
  "/",
  [
    auth,
    [
      check("text", "Text is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

/* 
    @route  GET api/posts
    @desc   Cet all posts
    @access Private
*/

router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/* 
    @route  GET api/posts/:id
    @desc   Get post by ID
    @access Private
*/

router.get("/:post_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    if (!post) {
      return res.status(404).json({ msg: "Post Not Found!" });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(404).json({ msg: "Post Not Found!" });
    }
    res.status(500).send("Server Error");
  }
});

/* 
    @route  DELETE api/posts/:id
    @desc   Delete post by ID
    @access Private
*/

router.delete("/:post_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not Authorized" });
    }

    if (!post) {
      return res.status(404).json({ msg: "Post Not Found!" });
    }
    await post.remove();

    res.json({ msg: "Post Removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(404).json({ msg: "Post Not Found!" });
    }
    res.status(500).send("Server Error");
  }
  // FIXME: if the post is deleted user null
});

/* 
    @route  PUT api/posts/yike/:id
    @desc   Like post by ID
    @access Private
*/

router.put("/yike/:post_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    // Check if the post has already yiked

    if (
      post.yikes.filter(yike => yike.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }
    post.yikes.unshift({ user: req.user.id });

    await post.save();
    res.json(post.yikes);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(404).json({ msg: "Post Not Found!" });
    }
    res.status(500).send("Server Error");
  }
});

/* 
    @route  PUT api/posts/unyike/:id
    @desc   Like post by ID
    @access Private
*/

router.put("/unyike/:post_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    // Check if the post has already yiked

    if (
      post.yikes.filter(yike => yike.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: "Post has not yet been yiked" });
    }

    const removeIndex = post.yikes
      .map(yike => yike.user.id.toString())
      .indexOf(req.user.id);

    post.yikes.splice(removeIndex, 1);
    await post.save();
    res.json(post.yikes);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(404).json({ msg: "Post Not Found!" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
