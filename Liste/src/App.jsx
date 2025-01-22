import React from 'react';
import { PostProvider } from './Context/Context.jsx';
import AddPost from './components/AddPost.jsx';
import PostList from './components/PostList.jsx';
import './App.css';

function App() {
  return (
    <PostProvider> {}
      <div className="App">
        <h1>My Blog</h1>
        <AddPost />
        <PostList />
      </div>
    </PostProvider>
  );
}

export default App;
