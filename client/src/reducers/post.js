import { GET_POSTS, POST_ERROR, UPDATE_YIKES } from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_YIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, yikes: payload.yikes } : post
        ),
        loading: false
      };
    default:
      return state;
  }
}
