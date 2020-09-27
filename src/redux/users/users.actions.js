import UsersActionTypes from "./users.types";
import axios from "../../utils/axios";
import { id } from "../../utils/constants";

//GETTING USER INFORMATION
const getAllUserDetailsStart = () => ({
  type: UsersActionTypes.GET_ALL_USER_DETAILS_START,
});

const getAllUserDetailsSuccess = (users) => ({
  type: UsersActionTypes.GET_ALL_USER_DETAILS_SUCCESS,
  payload: users,
});

const getAllUserDetailsFailure = (message) => ({
  type: UsersActionTypes.GET_ALL_USER_DETAILS_FAILURE,
  payload: message,
});

export const getAllUserDetailsStartAsync = () => {
  return (dispatch) => {
    dispatch(getAllUserDetailsStart());
    axios
      .get("users")
      .then((res) => {
        const users = res.data;
        dispatch(getAllUserDetailsSuccess(users));
      })
      .catch((error) => dispatch(getAllUserDetailsFailure(error.message)));
  };
};

// USER UPDATE
const updateUserStart = () => ({
  type: UsersActionTypes.UPDATE_USER_START,
});

const updateUserSuccess = (user) => ({
  type: UsersActionTypes.UPDATE_USER_SUCCESS,
  payload: user,
});

const updateUserFailure = (message) => ({
  type: UsersActionTypes.UPDATE_USER_FAILURE,
  payload: message,
});

export const updateUserStartAsync = (id = id, updateDetails) => {
  return (dispatch) => {
    dispatch(updateUserStart());
    axios
      .put("users/" + id, { ...updateDetails })
      .then((res) => {
        const user = res.data;
        dispatch(updateUserSuccess(user));
      })
      .catch((error) => dispatch(updateUserFailure(error.message)));
  };
};
