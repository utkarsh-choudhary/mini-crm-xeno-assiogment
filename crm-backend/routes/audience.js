const express = require('express');
const router = express.Router();
// const Audience = require('../models/audience'); // Make sure this path is correct

// Create a new audience
router.post('/', async (req, res) => {
  try {
    const audience = new Audience(req.body);
    const savedAudience = await audience.save();
    res.status(201).json(savedAudience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all audiences
router.get('/', async (req, res) => {
  try {
    const audiences = await Audience.find();
    res.json(audiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get an audience by ID
router.get('/:id', async (req, res) => {
  try {
    const audience = await Audience.findById(req.params.id);
    if (!audience) return res.status(404).json({ message: 'Audience not found' });
    res.json(audience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an audience by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedAudience = await Audience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAudience) return res.status(404).json({ message: 'Audience not found' });
    res.json(updatedAudience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an audience by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedAudience = await Audience.findByIdAndDelete(req.params.id);
    if (!deletedAudience) return res.status(404).json({ message: 'Audience not found' });
    res.json({ message: 'Audience deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
