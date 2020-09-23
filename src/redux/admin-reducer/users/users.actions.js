import UserActionTypes from "../user.types";
import axios from "../../../utils/axios";

const authStart = () => ({
  type: UserActionTypes.AUTH_USER_START,
});

const authSuccess = (user) => ({
  type: UserActionTypes.AUTH_USER_SUCCESS,
  payload: user,
});

const authFailure = (message) => ({
  type: UserActionTypes.AUTH_USER_FAILURE,
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
  type: UserActionTypes.GET_USER_DETAILS_START,
});

const getUserDetailsSuccess = (user) => ({
  type: UserActionTypes.GET_USER_DETAILS_SUCCESS,
  payload: user,
});

const getUserDetailsFailure = (message) => ({
  type: UserActionTypes.GET_USER_DETAILS_FAILURE,
  payload: message,
});

export const getUserDetailsStartAsync = (id) => {
  return (dispatch) => {
    dispatch(getUserDetailsStart());
    const token = localStorage.getItem("x-auth-token");
    console.log(id);
    axios
      .get("users/" + id, { headers: { "x-auth-token": token } })
      .then((res) => {
        const user = res.data;
        dispatch(getUserDetailsSuccess(user));
      })
      .catch((error) => dispatch(getUserDetailsFailure(error.message)));
  };
};

// USER CREATION
const userCreateStart = () => ({
  type: UserActionTypes.USER_CREATE_START,
});

const userCreateSuccess = (user) => ({
  type: UserActionTypes.USER_CREATE_SUCCESS,
  payload: user,
});

const userCreateFailure = (message) => ({
  type: UserActionTypes.USER_CREATE_FAILURE,
  payload: message,
});

export const createUserStartAsync = (createDetails) => {
  return (dispatch) => {
    dispatch(userCreateStart());
    axios
      .post("users", createDetails)
      .then((res) => {
        console.log(res);
        const token = res.headers["x-auth-token"];
        localStorage.setItem("x-auth-token", token);
        const user = res.data;
        localStorage.setItem("_id", user._id);

        dispatch(userCreateSuccess(user));
        dispatch(getUserDetailsStartAsync(user._id));
      })
      .catch((error) => dispatch(userCreateFailure(error.message)));
  };
};

// USER UPDATE CREATION
const updateUserDetailsStart = () => ({
  type: UserActionTypes.UPDATE_USER_DETAILS_START,
});

const updateUserDetailsSuccess = (user) => ({
  type: UserActionTypes.UPDATE_USER_DETAILS_SUCCESS,
  payload: user,
});

const updateUserDetailsFailure = (message) => ({
  type: UserActionTypes.UPDATE_USER_DETAILS_FAILURE,
  payload: message,
});

export const updateUserDetailsStartAsync = (updateDetails) => {
  return (dispatch) => {
    dispatch(updateUserDetailsStart());
    axios
      .post("users", updateDetails)
      .then((res) => {
        const user = res.data;
        dispatch(updateUserDetailsSuccess(user));
      })
      .catch((error) => dispatch(updateUserDetailsFailure(error.message)));
  };
};
