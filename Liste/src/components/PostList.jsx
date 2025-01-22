import React from 'react';
import Post from './Post.jsx';
import { usePosts } from '../Context/Context.jsx';

function PostList() {
  const { state } = usePosts();

  return (
    <div>
      <h2>Post List</h2>
      {state.posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {state.posts.map((post, index) => (
            <Post key={index} post={post} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;
