import BankTypes from "./bank.types";
import axios from "../../utils/axios";
import { id } from "../../utils/constants";

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

export const getBankDetailsStartAsync = () => {
  return (dispatch) => {
    dispatch(getBankDetailsStart());
    axios
      .get("bank/" + id)
      .then((res) => {
        const bank = res.data.data;
        dispatch(getBankDetailsSuccess(bank));
      })
      .catch((error) => dispatch(getBankDetailsFailure(error.message)));
  };
};

const bankCreateStart = () => ({
  type: BankTypes.BANK_CREATE_START,
});

const bankCreateSuccess = (bank) => ({
  type: BankTypes.BANK_CREATE_SUCCESS,
  payload: bank,
});

const bankCreateFailure = (message) => ({
  type: BankTypes.BANK_CREATE_FAILURE,
  payload: message,
});

export const bankCreateStartAsync = (bankDetails) => {
  return (dispatch) => {
    dispatch(bankCreateStart());
    axios
      .post("banks/" + id, { ...bankDetails })
      .then((res) => {
        const bank = res.data.data;
        dispatch(bankCreateSuccess(bank));
      })
      .catch((error) => dispatch(bankCreateFailure(error.message)));
  };
};

//BANK DETAILS UPDATE ACTION
const bankUpdateStart = () => ({
  type: BankTypes.BANK_UPDATE_START,
});

const bankUpdateSuccess = (bank) => ({
  type: BankTypes.BANK_UPDATE_SUCCESS,
  payload: bank,
});

const bankUpdateFailure = (message) => ({
  type: BankTypes.BANK_UPDATE_FAILURE,
  payload: message,
});

export const bankUpdateStartAsync = (bankDetails) => {
  return (dispatch) => {
    dispatch(bankUpdateStart());
    axios
      .put("bank/" + id, { ...bankDetails })
      .then((res) => {
        const user = res.data.data;
        dispatch(bankUpdateSuccess(user));
      })
      .catch((error) => dispatch(bankUpdateFailure(error.message)));
  };
};

//GET BANK DETAILS ACTION
const getAllBanksStart = () => ({
  type: BankTypes.GET_BANK_DETAILS_START,
});

const getAllBanksSuccess = (banks) => ({
  type: BankTypes.GET_BANK_DETAILS_SUCCESS,
  payload: banks,
});

const getAllBanksFailure = (message) => ({
  type: BankTypes.GET_BANK_DETAILS_FAILURE,
  payload: message,
});

export const getAllBanksStartAsync = () => {
  return (dispatch) => {
    dispatch(getAllBanksStart());
    axios
      .get("bank/")
      .then((res) => {
        const banks = res.data.data;
        dispatch(getAllBanksSuccess(banks));
      })
      .catch((error) => dispatch(getAllBanksFailure(error.message)));
  };
};
