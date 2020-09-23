import axios from "../../../utils/axios";
import TransactionTypes from "./transactions.types";

//GETTING TRANSACTIONS
const getTransactionsStart = () => ({
  type: TransactionTypes.GET_TRANSACTIONS_START,
});

const getTransactionsSuccess = (transactions) => ({
  type: TransactionTypes.GET_TRANSACTIONS_SUCCESS,
  payload: transactions,
});

const getTransactionsFailure = (message) => ({
  type: TransactionTypes.GET_TRANSACTIONS_FAILURE,
  payload: message,
});

export const getTransactionsStartAsync = (depositDetails) => {
  return (dispatch) => {
    dispatch(getTransactionsStart());
    axios
      .post("transactions", { ...depositDetails })
      .then((res) => {
        const transactions = res.data;
        dispatch(getTransactionsSuccess(transactions));
      })
      .catch((error) => dispatch(getTransactionsFailure(error.message)));
  };
};

// MAKING A DEPOSIT TRANSACTION
const depositStart = () => ({
  type: TransactionTypes.DEPOSIT_START,
});

const depositSuccess = (deposit) => ({
  type: TransactionTypes.DEPOSIT_SUCCESS,
  payload: deposit,
});

const depositFailure = (message) => ({
  type: TransactionTypes.DEPOSIT_FAILURE,
  payload: message,
});

export const depositStartAsync = (depositDetails) => {
  return (dispatch) => {
    dispatch(depositStart());
    axios
      .post("transactions/deposit", { ...depositDetails })
      .then((res) => {
        const deposit = res.data.data;
        dispatch(depositSuccess(deposit));
      })
      .catch((error) => dispatch(depositFailure(error.message)));
  };
};

// MAKING WITHDRAWAL TRANSACTION
const withdrawStart = () => ({
  type: TransactionTypes.WITHDRAW_START,
});

const withdrawSuccess = (withdraw) => ({
  type: TransactionTypes.WITHDRAW_SUCCESS,
  payload: withdraw,
});

const withdrawFailure = (message) => ({
  type: TransactionTypes.WITHDRAW_FAILURE,
  payload: message,
});

export const withdrawStartAsync = (withdrawDetails) => {
  return (dispatch) => {
    dispatch(withdrawStart());
    axios
      .post("transactions/withdraw", { ...withdrawDetails })
      .then((res) => {
        const withdraw = res.data;
        dispatch(withdrawSuccess(withdraw));
      })
      .catch((error) => dispatch(withdrawFailure(error.message)));
  };
};
