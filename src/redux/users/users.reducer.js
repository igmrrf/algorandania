import UsersActionTypes from "./users.types";
import { updateItemDetails } from "../reducer.utils";

const initialState = {
  isFetching: false,
  errorMessage: null,
  data: [],
  message: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UsersActionTypes.GET_ALL_USER_DETAILS_START:
    case UsersActionTypes.UPDATE_USER_START:
      return {
        ...state,
        isFetching: true,
        message: null,
        errorMessage: null,
      };
    case UsersActionTypes.GET_ALL_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    case UsersActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: updateItemDetails(state.data, action.payload.data),
        message: action.payload.message,
      };
    case UsersActionTypes.GET_ALL_USER_DETAILS_FAILURE:
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
