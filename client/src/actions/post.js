import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_YIKES,
  DELETE_POST,
  CREATE_POST,
  GET_POST
} from "./types";

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
      payload: { post_id, yikes: res.data }
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
      payload: { post_id, yikes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Post
export const deletePost = post_id => async dispatch => {
  try {
    const res = await axios.delete(`api/posts/${post_id}`);

    dispatch({
      type: DELETE_POST,
      payload: post_id
    });
    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.responce.statusText, status: err.response.status }
    });
  }
};

// Create Post
export const createPost = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("api/posts/", formData, config);

    dispatch({
      type: CREATE_POST,
      payload: res.data
    });

    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.responce.statusText, status: err.response.status }
    });
  }
};

// Get post

export const getPost = post_id => async dispatch => {
  try {
    const res = await axios.get(`api/posts/${post_id}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    console.log(post_id);
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
