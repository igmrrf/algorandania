import UserActionTypes from "./user.types";
import axios from "../../utils/axios";

const authStart = () => ({
  type: UserActionTypes.AUTH_START,
});

const authSuccess = (user) => ({
  type: UserActionTypes.AUTH_SUCCESS,
  payload: user,
});

const authFailure = (message) => ({
  type: UserActionTypes.AUTH_FAILURE,
  payload: message,
});

export const authStartAsync = (loginDetails) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("auth", { ...loginDetails })
      .then((res) => {
        const user = res.data.data;
        dispatch(authSuccess(user));
      })
      .catch((error) => dispatch(authFailure(error.message)));
  };
};
