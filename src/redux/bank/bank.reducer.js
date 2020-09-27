import BankAccountTypes from "./bank.types";

const initialState = {
  isFetching: false,
  errorMessage: null,
  data: [],
};

const bankReducer = (state = initialState, action) => {
  switch (action.payload) {
    case BankAccountTypes.GET_BANK_DETAILS_START:
      return {
        ...state,
        isFetching: true,
      };
    case BankAccountTypes.GET_BANK_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
      };
    case BankAccountTypes.GET_BANK_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case BankAccountTypes.BANK_CREATE_START:
      return {
        ...state,
        isFetching: true,
      };
    case BankAccountTypes.BANK_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case BankAccountTypes.BANK_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case BankAccountTypes.BANK_UPDATE_START:
      return {
        ...state,
        isFetching: true,
      };
    case BankAccountTypes.BANK_UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...state.data, ...action.payload },
      };
    case BankAccountTypes.BANK_UPDATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case BankAccountTypes.GET_ALL_BANKS_START:
      return {
        ...state,
        isFetching: true,
      };
    case BankAccountTypes.GET_ALL_BANKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
      };
    case BankAccountTypes.GET_ALL_BANKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default bankReducer;
