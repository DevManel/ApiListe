import React, { useState } from 'react';
import { usePosts } from '../Context/Context.jsx';

function Post({ post, index }) {
  const { dispatch } = usePosts();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedContent, setUpdatedContent] = useState(post.content);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_POST', payload: index });
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch({
        type: 'EDIT_POST',
        payload: {
          index,
          updatedPost: { title: updatedTitle, content: updatedContent },
        },
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Edit Title"
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            placeholder="Edit Content"
          />
        </div>
      ) : (
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      )}

      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Post;
