import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAiLURE,
} from "./UserTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAiLURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        const users = json;
        dispatch(fetchUsersSuccess(users));
      })
      .error((error) => {
        const errorMsg = error;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
