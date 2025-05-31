const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});

// Schema & Model
const weatherSchema = new mongoose.Schema({
  location: String,
  startDate: String,
  endDate: String,
  weatherData: Array
});

const Weather = mongoose.model('Weather', weatherSchema);

// Routes

// CREATE
app.post('/weather', async (req, res) => {
  try {
    const entry = new Weather(req.body);
    const saved = await entry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
app.get('/weather', async (req, res) => {
  const all = await Weather.find();
  res.json(all);
});

// DELETE
app.delete('/weather/:id', async (req, res) => {
  try {
    await Weather.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch {
    res.status(500).json({ error: 'Failed to delete' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
