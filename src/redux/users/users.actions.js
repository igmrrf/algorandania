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
    axios
      .get("users/")
      .then((res) => {
        const users = res.data;
        dispatch(getAllUserDetailsSuccess(users));
      })

      .catch((error) => {
        if (error.response.data) {
          dispatch(getAllUserDetailsFailure(error.response.data));
        } else if (error.message) {
          dispatch(getAllUserDetailsFailure(error.message));
        }
      });
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
    dispatch(updateUserStart());
    axios
      .put("users/balance/" + id, { ...updateDetails })
      .then((res) => {
        const data = res.data;
        dispatch(updateUserSuccess(data));
      })
      .catch((error) => {
        if (error.response.data) {
          dispatch(updateUserFailure(error.response.data));
        } else if (error.message) {
          dispatch(updateUserFailure(error.message));
        }
      });
  };
};
