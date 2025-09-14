const mongoose = require('mongoose');

const attendanceRecordSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  session_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QRSession',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late', 'authorized_leave'],
    required: true
  },
  mark_time: {
    type: Date,
    default: Date.now
  },
  verification_method: {
    type: String,
    enum: ['qr_scan', 'manual', 'biometric'],
    default: 'qr_scan'
  },
  marked_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    default: null // null means self-marked by student
  },
  reason: {
    type: String,
    default: '',
    trim: true
  },
  has_document: {
    type: Boolean,
    default: false
  },
  is_verified: {
    type: Boolean,
    default: true
  },
  location: {
    latitude: { type: Number, default: null },
    longitude: { type: Number, default: null }
  }
}, {
  timestamps: true
});

// Compound index for faster queries
attendanceRecordSchema.index({ student_id: 1, class_id: 1, date: -1 });
attendanceRecordSchema.index({ class_id: 1, date: -1 });
attendanceRecordSchema.index({ session_id: 1 });

module.exports = mongoose.model('AttendanceRecord', attendanceRecordSchema);