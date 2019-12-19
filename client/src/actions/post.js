import axios from "axios";
import { setAlert } from "./alert";
import { GET_POSTS, POST_ERROR, UPDATE_YIKES } from "./types";

// Get posts

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("api/posts");
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Yike

export const addYike = post_id => async dispatch => {
  try {
    const res = await axios.put(`api/posts/yike/${post_id}`);
    dispatch({
      type: UPDATE_YIKES,
      payload: {
        payload: { post_id, yikes: res.data }
      }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove Yike
export const removeYike = post_id => async dispatch => {
  try {
    const res = await axios.put(`api/posts/unyike/${post_id}`);
    dispatch({
      type: UPDATE_YIKES,
      payload: {
        payload: { post_id, yikes: res.data }
      }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
