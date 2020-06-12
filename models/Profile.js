const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  school: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  activities: [
    {
      type: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      instructor: {
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
      description: {
        type: String
      },
      awards: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      grade: {
        type: String,
        required: true
      },
      programofstudy: {
        type: String,
        required: true
      },
      gpa: {
        type: String,
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
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', profileSchema);
