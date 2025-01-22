import React, { useState } from 'react';
import { usePosts } from '../Context/Context.jsx';

function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { dispatch } = usePosts();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch({
        type: 'ADD_POST',
        payload: { title, content },
      });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>Add a Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
