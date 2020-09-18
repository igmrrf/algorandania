import UserActionTypes from "./user.types";
const initialState = {
  isFetching: 0,
  user: null,
  errorMessage: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.AUTH_START:
      return {
        ...state,
        isFetching: +1,
      };
    case UserActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isFetching: -1,
        user: action.payload,
      };
    case UserActionTypes.AUTH_FAILURE:
      return {
        ...state,
        isFetching: -1,
        errorMessage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
