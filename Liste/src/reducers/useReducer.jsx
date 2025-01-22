export const initialState = {
    posts: [],
  };
  
  export function postReducer(state, action) {
    switch (action.type) {
      case 'ADD_POST':
        return { ...state, posts: [...state.posts, action.payload] };
      case 'DELETE_POST':
        return { ...state, posts: state.posts.filter((post, index) => index !== action.payload) };
      case 'EDIT_POST':
        const updatedPosts = state.posts.map((post, index) =>
          index === action.payload.index ? { ...post, ...action.payload.updatedPost } : post
        );
        return { ...state, posts: updatedPosts };
      default:
        return state;
    }
  }
  