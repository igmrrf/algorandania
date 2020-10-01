import BankAccountTypes from "./bank.types";

const initialState = {
  isFetching: false,
  errorMessage: null,
  data: [],
  message: null,
};

const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case BankAccountTypes.GET_BANK_DETAILS_START:
    case BankAccountTypes.BANK_CREATE_START:
    case BankAccountTypes.BANK_UPDATE_START:
    case BankAccountTypes.GET_ALL_BANKS_START:
      return {
        ...state,
        isFetching: true,
        message: null,
        errorMessage: null,
      };
    case BankAccountTypes.GET_BANK_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    case BankAccountTypes.BANK_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.bank,
        message: action.payload.message,
      };

    case BankAccountTypes.BANK_UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...state.data, ...action.payload },
      };

    case BankAccountTypes.GET_ALL_BANKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
      };
    case BankAccountTypes.BANK_UPDATE_FAILURE:
    case BankAccountTypes.BANK_CREATE_FAILURE:
    case BankAccountTypes.GET_BANK_DETAILS_FAILURE:
    case BankAccountTypes.GET_ALL_BANKS_FAILURE:
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
export default bankReducer;
