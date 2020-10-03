import UsersActionTypes from "./users.types";
import axios from "../../utils/axios";
import { id } from "../../utils/constants";
import { defaultFormat } from "moment";

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
    console.log(localStorage.getItem("x-auth-token"));
    axios
      .get("users/")
      .then((res) => {
        const users = res.data;
        dispatch(getAllUserDetailsSuccess(users));
      })
      .catch((error) =>
        dispatch(getAllUserDetailsFailure(error.response.data))
      );
  };
};

// USER UPDATE
const updateUserStart = () => ({
  type: UsersActionTypes.UPDATE_USER_START,
});

const updateUserSuccess = (data) => ({
  type: UsersActionTypes.UPDATE_USER_SUCCESS,
  payload: data,
});

const updateUserFailure = (message) => ({
  type: UsersActionTypes.UPDATE_USER_FAILURE,
  payload: message,
});

export const updateUserStartAsync = (id, updateDetails) => {
  return (dispatch) => {
    console.log(updateDetails);
    dispatch(updateUserStart());
    axios
      .put("users/balance/" + id, { ...updateDetails })
      .then((res) => {
        const data = res.data;
        dispatch(updateUserSuccess(data));
      })
      .catch((error) => dispatch(updateUserFailure(error.response.data)));
  };
};
