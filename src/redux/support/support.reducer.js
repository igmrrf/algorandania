import SupportActionTypes from "./support.types";

const initialState = {
  isFetching: false,
  errorMessage: null,
  data: [],
};

const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SupportActionTypes.GET_SUPPORT_START:
      return {
        ...state,
        isFetching: true,
      };
    case SupportActionTypes.GET_SUPPORT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
      };
    case SupportActionTypes.GET_SUPPORT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default supportReducer;
