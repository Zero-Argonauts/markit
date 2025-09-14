const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true
  },
  roll_no: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ''
  },
  avatar_url: {
    type: String,
    default: ''
  },
  year: {
    type: Number,
    required: true,
    min: 1,
    max: 4
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },
  branch: {
    type: String,
    required: true
  },
  enrollment_date: {
    type: Date,
    default: Date.now
  },
  emergency_contact: {
    name: { type: String, default: '' },
    phone: { type: String, default: '' },
    relation: { type: String, default: '' }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);