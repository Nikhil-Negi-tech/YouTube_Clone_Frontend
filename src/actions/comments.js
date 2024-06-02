import * as api from '../api';

export const editComment = (CommentData) => async (dispatch) => {
  try {
    const { id, commentBody } = CommentData;
    const { data } = await api.editComment(id, commentBody);
    dispatch({ type: 'EDIT_COMMENT', payload: data });
    dispatch(getAllComment()); // Ensure the comments list is updated after editing
  } catch (error) {
    console.log(error);
  }
};

export const postComment = (CommentData) => async (dispatch) => {
  try {
    const { data } = await api.postComment(CommentData);
    dispatch({ type: 'POST_COMMENT', payload: data });
    dispatch(getAllComment()); // Ensure the comments list is updated after posting
  } catch (error) {
    console.log(error);
  }
};

export const getAllComment = () => async (dispatch) => {
  try {
    const { data } = await api.getAllComment();
    dispatch({ type: 'FETCH_ALL_COMMENTS', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = (id) => async (dispatch) => {
  try {
    await api.deleteComment(id);
    dispatch(getAllComment()); // Ensure the comments list is updated after deletion
  } catch (error) {
    console.log(error);
  }
};
