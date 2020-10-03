import BankAccountTypes from "./bank.types";
import axios from "../../utils/axios";
import { id } from "../../utils/constants";

//GET BANK DETAILS ACTION
const getBankDetailsStart = () => ({
  type: BankAccountTypes.GET_BANK_DETAILS_START,
});

const getBankDetailsSuccess = (bank) => ({
  type: BankAccountTypes.GET_BANK_DETAILS_SUCCESS,
  payload: bank,
});

const getBankDetailsFailure = (message) => ({
  type: BankAccountTypes.GET_BANK_DETAILS_FAILURE,
  payload: message,
});

export const getBankDetailsStartAsync = () => {
  return (dispatch) => {
    dispatch(getBankDetailsStart());
    axios
      .get("banks/" + id)
      .then((res) => {
        let bank = res.data;
        dispatch(getBankDetailsSuccess(bank));
      })
      .catch((error) => dispatch(getBankDetailsFailure(error.response.data)));
  };
};

const bankCreateStart = () => ({
  type: BankAccountTypes.BANK_CREATE_START,
});

const bankCreateSuccess = (bank, message) => ({
  type: BankAccountTypes.BANK_CREATE_SUCCESS,
  payload: { bank, message },
});

const bankCreateFailure = (message) => ({
  type: BankAccountTypes.BANK_CREATE_FAILURE,
  payload: message,
});

export const bankCreateStartAsync = (bankDetails) => {
  return (dispatch) => {
    dispatch(bankCreateStart());
    console.log(bankDetails);
    axios
      .post("banks", { ...bankDetails })
      .then((res) => {
        const { data, message } = res.data;
        dispatch(bankCreateSuccess(data, message));
      })
      .catch((error) => dispatch(bankCreateFailure(error.response.data)));
  };
};

//BANK DETAILS UPDATE ACTION
const bankUpdateStart = () => ({
  type: BankAccountTypes.BANK_UPDATE_START,
});

const bankUpdateSuccess = (bank) => ({
  type: BankAccountTypes.BANK_UPDATE_SUCCESS,
  payload: bank,
});

const bankUpdateFailure = (message) => ({
  type: BankAccountTypes.BANK_UPDATE_FAILURE,
  payload: message,
});

export const bankUpdateStartAsync = (bankDetails) => {
  return (dispatch) => {
    dispatch(bankUpdateStart());
    axios
      .put("banks/" + id, { ...bankDetails })
      .then((res) => {
        const user = res.data.data;
        dispatch(bankUpdateSuccess(user));
      })
      .catch((error) => dispatch(bankUpdateFailure(error.response.data)));
  };
};

//GET BANK DETAILS ACTION
const getAllBanksStart = () => ({
  type: BankAccountTypes.GET_BANK_DETAILS_START,
});

const getAllBanksSuccess = (banks) => ({
  type: BankAccountTypes.GET_BANK_DETAILS_SUCCESS,
  payload: banks,
});

const getAllBanksFailure = (message) => ({
  type: BankAccountTypes.GET_BANK_DETAILS_FAILURE,
  payload: message,
});

export const getAllBanksStartAsync = () => {
  return (dispatch) => {
    dispatch(getAllBanksStart());
    axios
      .get("banks/")
      .then((res) => {
        const banks = res.data;
        dispatch(getAllBanksSuccess(banks));
      })
      .catch((error) => dispatch(getAllBanksFailure(error.response.data)));
  };
};
