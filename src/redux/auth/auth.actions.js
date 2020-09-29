import AuthActionTypes from "./auth.types";
import axios from "../../utils/axios";
import { id } from "../../utils/constants";

const authStart = () => ({
  type: AuthActionTypes.AUTH_USER_START,
});

const authSuccess = (user) => ({
  type: AuthActionTypes.AUTH_USER_SUCCESS,
  payload: user,
});

const authFailure = (message) => ({
  type: AuthActionTypes.AUTH_USER_FAILURE,
  payload: message,
});

export const authStartAsync = (loginDetails) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("auth", { ...loginDetails })
      .then((res) => {
        const user = res.data;
        const token = res.headers["x-auth-token"];
        localStorage.setItem("x-auth-token", token);
        localStorage.setItem("_id", user._id);
        dispatch(authSuccess(user));
      })
      .catch((error) => dispatch(authFailure(error.message)));
  };
};

//GETTING USER INFORMATION
const getUserDetailsStart = () => ({
  type: AuthActionTypes.GET_USER_DETAILS_START,
});

const getUserDetailsSuccess = (user) => ({
  type: AuthActionTypes.GET_USER_DETAILS_SUCCESS,
  payload: user,
});

const getUserDetailsFailure = (message) => ({
  type: AuthActionTypes.GET_USER_DETAILS_FAILURE,
  payload: message,
});

export const getUserDetailsStartAsync = () => {
  return (dispatch) => {
    dispatch(getUserDetailsStart());
    axios
      .get("users/" + id)
      .then((res) => {
        const user = res.data;
        dispatch(getUserDetailsSuccess(user));
      })
      .catch((error) => dispatch(getUserDetailsFailure(error.message)));
  };
};

// USER CREATION
const userCreateStart = () => ({
  type: AuthActionTypes.USER_CREATE_START,
});

const userCreateSuccess = (id) => ({
  type: AuthActionTypes.USER_CREATE_SUCCESS,
  payload: id,
});

const userCreateFailure = (message) => ({
  type: AuthActionTypes.USER_CREATE_FAILURE,
  payload: message,
});

export const createUserStartAsync = (createDetails) => {
  return (dispatch) => {
    dispatch(userCreateStart());
    axios
      .post("users", createDetails)
      .then(async (res) => {
        console.log(res);
        const user = res.data;
        const token = res.headers["x-auth-token"];
        localStorage.setItem("x-auth-token", token);
        localStorage.setItem("_id", user._id);
        dispatch(userCreateSuccess(user._id));
      })
      .catch((error) => dispatch(userCreateFailure(error.message)));
  };
};

// USER UPDATE CREATION
const updateUserDetailsStart = () => ({
  type: AuthActionTypes.UPDATE_USER_DETAILS_START,
});

const updateUserDetailsSuccess = (user) => ({
  type: AuthActionTypes.UPDATE_USER_DETAILS_SUCCESS,
  payload: user,
});

const updateUserDetailsFailure = (message) => ({
  type: AuthActionTypes.UPDATE_USER_DETAILS_FAILURE,
  payload: message,
});

export const updateUserDetailsStartAsync = (updateDetails) => {
  return (dispatch) => {
    dispatch(updateUserDetailsStart());
    axios
      .put("users/" + id, { ...updateDetails })
      .then((res) => {
        const user = res.data;
        dispatch(updateUserDetailsSuccess(user));
      })
      .catch((error) => dispatch(updateUserDetailsFailure(error.message)));
  };
};
