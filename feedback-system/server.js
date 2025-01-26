const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

const app = express();
const port = 5000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Feedback_System');

// Define Feedback Schema
const feedbackSchema = new mongoose.Schema({
  username: String,
  email: String,
  feedbackText: String,
  timestamp: { type: Date, default: Date.now },
  category: { type: String, enum: ['suggestion', 'bug', 'feature_request'], default: 'suggestion' }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// POST /feedback: To submit feedback
app.post('/feedback', async (req, res) => {
  const { username, email, feedbackText, category } = req.body;

  try {
    const newFeedback = new Feedback({ username, email, feedbackText, category });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback', error });
  }
});

// GET /feedback: To fetch feedback
app.get('/feedback', async (req, res) => {
    const { category } = req.query;
    
    // Log the category parameter received from the frontend
    console.log('Received category parameter:', category);

    // Building the query
    let query = {};

    if (category) {
      // Log the query being constructed
      console.log(`Building query for category: ${category}`);
      query.category = category;  // Exact match filter for category
    }

    try {
      // Check the query to be sent to MongoDB
      console.log('Executing MongoDB query:', query);

      const feedback = await Feedback.find(query);  // Execute the query to find feedback

      // If nothing matches, log the result
      if (feedback.length === 0) {
        console.log('No feedback found for this category.');
      }

      res.json(feedback);  // Send the filtered feedback as the response
    } catch (error) {
      console.error('Error fetching feedback:', error);
      res.status(500).send('Error fetching feedback');
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
