const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, 'Subject name is required'],
    trim: true
  },
  subject_code: {
    type: String,
    required: [true, 'Subject code is required'],
    trim: true,
    uppercase: true
  },
  section: {
    type: String,
    required: true,
    trim: true
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },
  year: {
    type: Number,
    required: true,
    min: 1,
    max: 4
  },
  branch: {
    type: String,
    required: true,
    trim: true
  },
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  room: {
    type: String,
    default: '',
    trim: true
  },
  schedule: {
    day_of_week: {
      type: Number,
      min: 0, // Sunday = 0
      max: 6  // Saturday = 6
    },
    start_time: String, // Format: "09:00"
    end_time: String,   // Format: "10:00"
    duration_minutes: Number
  },
  total_students: {
    type: Number,
    default: 0
  },
  is_active: {
    type: Boolean,
    default: true
  },
  has_theory: {
    type: Boolean,
    default: true
  },
  has_practical: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Class', classSchema);