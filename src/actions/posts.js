import * as api from "../api";

// Action creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
  } catch (error) {
    console.log(error.message);
  }
  const action = { type: "FETCH_ALL", payload: [] };

  dispatch(action);
};
