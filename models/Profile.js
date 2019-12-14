const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  sex_preferances: {
    type: [String],
    required: true
  },
  gender: {
    type: [String],
    required: true
  },

  experience: [
    {
      title: {
        type: String,
        required: true
      },
      feelings: {
        type: [String],
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      bond_type: {
        type: [String]
      },
      times_split: {
        type: String
      },
      description: {
        type: String
      }
    }
  ],

  interest: [
    {
      title: {
        type: String,
        required: true
      },
      genre: {
        type: [String],
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],

  social: [
    {
      title: {
        type: String
      },
      link: {
        type: String
      }
    }
  ],

  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
