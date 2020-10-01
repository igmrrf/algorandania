import AuthActionTypes from "./auth.types";

const initialState = {
  errorMessage: null,
  isFetching: false,
  data: null,
  role: null,
  id: null,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.UPDATE_USER_DETAILS_START:
    case AuthActionTypes.GET_USER_DETAILS_START:
    case AuthActionTypes.USER_CREATE_START:
    case AuthActionTypes.AUTH_USER_START:
    case AuthActionTypes.UPDATE_AUTH_PASSWORD_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
        message: null,
      };
    case AuthActionTypes.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
        role: action.payload.isAdmin ? "admin" : "user",
        errorMessage: null,
      };

    case AuthActionTypes.AUTH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
        role: action.payload.isAdmin ? "admin" : "user",
        errorMessage: null,
      };

    case AuthActionTypes.USER_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        id: action.payload,
      };

    case AuthActionTypes.UPDATE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        errorMessage: null,
      };
    case AuthActionTypes.UPDATE_AUTH_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: action.payload,
      };
    case AuthActionTypes.UPDATE_USER_DETAILS_FAILURE:
    case AuthActionTypes.UPDATE_AUTH_PASSWORD_FAILURE:
    case AuthActionTypes.GET_USER_DETAILS_FAILURE:
    case AuthActionTypes.AUTH_USER_FAILURE:
    case AuthActionTypes.USER_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        message: null,
      };
    default:
      return state;
  }
};
export default authReducer;
