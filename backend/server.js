const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


// Models
const User = require('./models/User');
const Teacher = require('./models/Teacher');
const Student = require('./models/Student');
const Class = require('./models/Class');
const QRSession = require('./models/QRSession');
const AttendanceRecord = require('./models/AttendanceRecord');


// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(' Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Test route
app.get('/health', (req, res) => {
  res.json({ 
    message: 'Smart Attendance API is running!', 
    status: 'success',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
});