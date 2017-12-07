var mongoose = require('mongoose');

var FeedbackSchema = new mongoose.Schema({
  name: String,
  date: Date,
  department: String,
  theme: String,
  subTheme: String,
  feedback: String,
  status: String, 
  pointOfContact: String,
  outstandingActions: String,
  strategicReviewLink: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);