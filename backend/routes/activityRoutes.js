const express = require('express');
const Activity = require('../models/activity');
const router = express.Router();

// Get all activities
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new activity
router.post('/', async (req, res) => {
  const activity = new Activity({
    name: req.body.name,
    deadline: req.body.deadline,
    status: req.body.status
  });

  try {
    const newActivity = await activity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an activity
router.patch('/:id', async (req, res) => {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
