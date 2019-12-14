const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
/* 
    @route  GET api/profile/this
    @desc   Get current users profile
    @access Private
*/

router.get("/this", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/*
    @route  POST api/profile
    @desc   Create or update user profile
    @access Private
*/
router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required")
        .not()
        .isEmpty(),
      check("gender", "Gender is required")
        .not()
        .isEmpty(),
      check("sex_preferances", "Sex Preferances is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { location, sex_preferances, status, gender, date } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;
    if (location) profileFields.location = location;
    if (status) profileFields.status = status;
    if (gender) profileFields.gender = gender;
    if (date) profileFields.date = date;
    if (sex_preferances) {
      profileFields.sex_preferances = sex_preferances
        .split(",")
        .map(sex_preferances => sex_preferances.trim());
    }
    console.log(profileFields.sex_preferances);
    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      // Create
      profile = new Profile(profileFields);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

/* 
    @route  GET api/profile
    @desc   GET all profiles
    @access Public
*/
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/* 
    @route  GET api/profile/user/:user_id
    @desc   GET profile by user ID
    @access Public
*/
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["name", "avatar"]);
    if (!profile) return res.status(400).json({ msg: "Profile not found" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

/* 
    @route  DELETE api/profile
    @desc   Delete profile, user & post
    @access Private
*/
router.delete("/", auth, async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User Deleted" });
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

/* 
    @route  PUT api/profile/experience
    @desc   Add profile experience
    @access Private
*/
router.put(
  "/experience",
  [
    auth,
    [
      check("title", "Title is Required")
        .not()
        .isEmpty(),
      check("feelings", "Feelings are Required")
        .not()
        .isEmpty(),
      check("from", "Start date is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      feelings,
      location,
      from,
      to,
      current,
      bond_type,
      times_split,
      description
    } = req.body;

    const newExp = {
      title,
      feelings,
      location,
      from,
      to,
      current,
      bond_type,
      times_split,
      description
    };

    const experianceFields = {};
    experianceFields.user = req.user.id;
    if (feelings) {
      experianceFields.feelings = feelings
        .split(",")
        .map(feelings => feelings.trim());
    }

    if (bond_type) {
      experianceFields.bond_type = bond_type
        .split(",")
        .map(bond_type => bond_type.trim());
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(newExp);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

/* 
    @route  PUT api/profile/interest
    @desc   Add profile experience
    @access Private
*/
router.put(
  "/interest",
  [
    auth,
    [
      check("title", "Title is Required")
        .not()
        .isEmpty(),
      check("genre", "Genre is Required")
        .not()
        .isEmpty(),
      check("from", "Start date is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, genre, from, to, current, description } = req.body;

    const newInt = {
      title,
      genre,
      from,
      to,
      current,
      description
    };

    const interestFields = {};
    interestFields.user = req.user.id;
    if (genre) {
      interestFields.genre = genre.split(",").map(genre => genre.trim());
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.interest.unshift(newInt);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
