import React, { useState } from 'react';

const CommentForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    remark: '',
    rating: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to an API or display it
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="remark">Remark:</label>
        <textarea
          id="remark"
          name="remark"
          value={formData.remark}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value="">Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
