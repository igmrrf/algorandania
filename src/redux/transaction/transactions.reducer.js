import TransactionActionTypes from "./transactions.types";

const initialState = {
  isFetching: false,
  errorMessage: null,
  data: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.payload) {
    case TransactionActionTypes.GET_TRANSACTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case TransactionActionTypes.GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
      };
    case TransactionActionTypes.GET_TRANSACTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case TransactionActionTypes.GET_ALL_TRANSACTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case TransactionActionTypes.GET_ALL_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
      };
    case TransactionActionTypes.GET_ALL_TRANSACTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default transactionReducer;
