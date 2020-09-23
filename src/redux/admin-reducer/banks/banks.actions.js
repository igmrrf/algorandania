import axios from "../../../utils/axios";
import BankTypes from "./bank.types";

//GET BANK DETAILS ACTION
const getBankDetailsStart = () => ({
  type: BankTypes.GET_BANK_DETAILS_START,
});

const getBankDetailsSuccess = (bank) => ({
  type: BankTypes.GET_BANK_DETAILS_SUCCESS,
  payload: bank,
});

const getBankDetailsFailure = (message) => ({
  type: BankTypes.GET_BANK_DETAILS_FAILURE,
  payload: message,
});

export const getBankDetailsStartAsync = (depositDetails) => {
  return (dispatch) => {
    dispatch(getBankDetailsStart());
    axios
      .get("bank", { ...depositDetails })
      .then((res) => {
        const user = res.data.data;
        dispatch(getBankDetailsSuccess(user));
      })
      .catch((error) => dispatch(getBankDetailsFailure(error.message)));
  };
};

const bankCreateStart = () => ({
  type: BankTypes.BANK_CREATE_START,
});

const bankCreateSuccess = (user) => ({
  type: BankTypes.BANK_CREATE_SUCCESS,
  payload: user,
});

const bankCreateFailure = (message) => ({
  type: BankTypes.BANK_CREATE_FAILURE,
  payload: message,
});

export const bankCreateStartAsync = (depositDetails) => {
  return (dispatch) => {
    dispatch(bankCreateStart());
    axios
      .post("auth", { ...depositDetails })
      .then((res) => {
        const user = res.data.data;
        dispatch(bankCreateSuccess(user));
      })
      .catch((error) => dispatch(bankCreateFailure(error.message)));
  };
};

//BANK DETAILS UPDATE ACTION
const bankUpdateStart = () => ({
  type: BankTypes.BANK_UPDATE_START,
});

const bankUpdateSuccess = (user) => ({
  type: BankTypes.BANK_UPDATE_SUCCESS,
  payload: user,
});

const bankUpdateFailure = (message) => ({
  type: BankTypes.BANK_UPDATE_FAILURE,
  payload: message,
});

export const bankUpdateStartAsync = (depositDetails) => {
  return (dispatch) => {
    dispatch(bankUpdateStart());
    axios
      .post("auth", { ...depositDetails })
      .then((res) => {
        const user = res.data.data;
        dispatch(bankUpdateSuccess(user));
      })
      .catch((error) => dispatch(bankUpdateFailure(error.message)));
  };
};
