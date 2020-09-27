import UsersActionTypes from "./users.types";

const initialState = {
  isFetching: false,
  errorMessage: null,
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UsersActionTypes.GET_ALL_USER_DETAILS_START:
      return {
        ...state,
        isFetching: true,
      };
    case UsersActionTypes.GET_ALL_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case UsersActionTypes.GET_ALL_USER_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case UsersActionTypes.UPDATE_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case UsersActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case UsersActionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
