const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Teacher name is required'],
    trim: true
  },
  employee_id: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
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
  subjects: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Teacher', teacherSchema);