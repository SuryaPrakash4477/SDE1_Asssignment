import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackDashboard = () => {
  const [feedback, setFeedback] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/feedback`, {
          params: { category },  // Ensure params are passed correctly
        });
        setFeedback(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, [category]);  // This will trigger the API call whenever `category` changes

  return (
    <div className="feedback-dashboard-container">
      <h2>Feedback Dashboard</h2>
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        className="dashboard-filter"
      >
        <option value="">All</option>
        <option value="suggestion">Suggestions</option>
        <option value="bug">Bugs</option>
        <option value="feature_request">Feature Requests</option>
      </select>
      <ul className="feedback-list">
        {feedback.length === 0 ? (
          <li>No feedback available for the selected category.</li>
        ) : (
          feedback.map((item) => (
            <li key={item._id}>
              <p><strong>{item.username}</strong> ({item.email})</p>
              <p>{item.feedbackText}</p>
              <p><i>{item.category}</i></p>
              <p><small>{new Date(item.timestamp).toLocaleString()}</small></p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FeedbackDashboard;
