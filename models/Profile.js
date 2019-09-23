const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  displayName:{
    type: String,
  },
  profilePic:{
    type: String,
  },
  phone:{
    type: String,
  },
  status:{
    type: String,
  },
  biography:{
    type: String,
  },
  user:{
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('profiles', ProfileSchema);