const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Answer text is required'],
    trim: true,
    maxlength: [5000, 'Answer text cannot exceed 5000 characters']
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: [true, 'Question reference is required']
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Mentor reference is required']
  }
}, {
  timestamps: true
});

// Index for better query performance
answerSchema.index({ question: 1, createdAt: 1 });
answerSchema.index({ mentor: 1, createdAt: -1 });

module.exports = mongoose.model('Answer', answerSchema);
