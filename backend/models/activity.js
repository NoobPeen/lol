const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  deadline: { type: Date, required: true },
  status: { type: String, required: true, enum: ['Pending', 'Completed', 'Cancelled'] }
});

module.exports = mongoose.model('Activity', activitySchema);
