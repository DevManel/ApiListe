import React, { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { postReducer, initialState } from '../reducers/useReducer.jsx';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
