const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Question title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  body: {
    type: String,
    required: [true, 'Question body is required'],
    trim: true,
    maxlength: [2000, 'Question body cannot exceed 2000 characters']
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Student reference is required']
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  status: {
    type: String,
    enum: ['open', 'answered', 'closed'],
    default: 'open'
  }
}, {
  timestamps: true
});

// Index for better query performance
questionSchema.index({ student: 1, createdAt: -1 });
questionSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Question', questionSchema); 