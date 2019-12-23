import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_YIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
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

export const addYike = id => async dispatch => {
  try {
    const res = await axios.put(`api/posts/yike/${id}`);
    dispatch({
      type: UPDATE_YIKES,
      payload: { id, yikes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove Yike
export const removeYike = id => async dispatch => {
  try {
    const res = await axios.put(`api/posts/unyike/${id}`);
    dispatch({
      type: UPDATE_YIKES,
      payload: { id, yikes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Post
export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
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
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("api/posts", formData, config);

    dispatch({
      type: ADD_POST,
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
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment

export const addComment = (post_id, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(
      `api/posts/comment/${post_id}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.responce.statusText, status: err.response.status }
    });
  }
};

// Delete comment

export const deleteComment = (post_id, comment_id) => async dispatch => {
  try {
    const res = await axios.delete(
      `api/posts/comment/${post_id}/${comment_id}`
    );

    dispatch({
      type: ADD_COMMENT,
      payload: comment_id
    });

    dispatch(setAlert("Comment Deleted", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.responce.statusText, status: err.response.status }
    });
  }
};
