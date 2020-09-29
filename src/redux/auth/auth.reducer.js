import AuthActionTypes from "./auth.types";

const initialState = {
  errorMessage: null,
  isFetching: false,
  data: null,
  role: null,
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.GET_USER_DETAILS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case AuthActionTypes.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
        role: action.payload.isAdmin ? "admin" : "user",
      };
    case AuthActionTypes.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case AuthActionTypes.AUTH_USER_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case AuthActionTypes.AUTH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
        role: action.payload.isAdmin ? "admin" : "user",
      };
    case AuthActionTypes.AUTH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case AuthActionTypes.USER_CREATE_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case AuthActionTypes.USER_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        id: action.payload,
      };
    case AuthActionTypes.USER_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case AuthActionTypes.UPDATE_USER_DETAILS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case AuthActionTypes.UPDATE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case AuthActionTypes.UPDATE_USER_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
