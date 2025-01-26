import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [category, setCategory] = useState('suggestion');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = {
      username,
      email,
      feedbackText,
      category,
    };

    try {
      await axios.post('http://localhost:5000/feedback', feedback);
      alert('Feedback submitted successfully');
      setUsername('');
      setEmail('');
      setFeedbackText('');
      setCategory('suggestion');
    } catch (error) {
      alert('Error submitting feedback');
    }
  };

  return (
    <div className="feedback-form-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2 className="form-title">Submit Your Feedback</h2>
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Your Feedback</label>
          <textarea
            placeholder="Share your feedback"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="suggestion">Suggestion</option>
            <option value="bug">Bug Report</option>
            <option value="feature_request">Feature Request</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
  );
};
export default FeedbackForm;
