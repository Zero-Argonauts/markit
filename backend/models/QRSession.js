const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const qrSessionSchema = new mongoose.Schema({
  session_id: {
    type: String,
    unique: true,
    default: () => uuidv4()
  },
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  qr_data: {
    type: String,
    required: true
  },
  session_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  start_time: {
    type: Date,
    required: true,
    default: Date.now
  },
  end_time: {
    type: Date,
    required: true
  },
  duration_minutes: {
    type: Number,
    required: true,
    default: 60
  },
  room: {
    type: String,
    default: '',
    trim: true
  },
  is_active: {
    type: Boolean,
    default: true
  },
  expires_at: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() + 30 * 1000) // 30 seconds from now
  },
  refresh_interval: {
    type: Number,
    default: 30 // seconds
  }
}, {
  timestamps: true
});

// Auto-expire sessions
qrSessionSchema.index({ "expires_at": 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('QRSession', qrSessionSchema);