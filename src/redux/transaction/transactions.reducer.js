import TransactionActionTypes from "./transactions.types";
import { addNewItem, deleteItem, updateItemDetails } from "../reducer.utils";

const initialState = {
  isFetching: false,
  errorMessage: null,
  data: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TransactionActionTypes.GET_ALL_TRANSACTIONS_START:
    case TransactionActionTypes.DELETE_TRANSACTION_START:
    case TransactionActionTypes.UPDATE_TRANSACTION_START:
    case TransactionActionTypes.CREATE_TRANSACTION_START:
    case TransactionActionTypes.GET_TRANSACTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case TransactionActionTypes.GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case TransactionActionTypes.GET_ALL_TRANSACTIONS_SUCCESS:
    
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case TransactionActionTypes.DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: deleteItem(state.data, action.payload),
      };

    case TransactionActionTypes.UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: updateItemDetails(state.data, action.payload),
      };

    case TransactionActionTypes.CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: addNewItem(state.data, action.payload),
      };

    case TransactionActionTypes.GET_ALL_TRANSACTIONS_FAILURE:
    case TransactionActionTypes.CREATE_TRANSACTION_FAILURE:
    case TransactionActionTypes.UPDATE_TRANSACTION_FAILURE:
    case TransactionActionTypes.DELETE_TRANSACTION_FAILURE:
    case TransactionActionTypes.GET_TRANSACTIONS_FAILURE:
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
