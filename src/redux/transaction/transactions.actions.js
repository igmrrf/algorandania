import TransactionTypes from "./transactions.types";
import axios from "../../utils/axios";
import { id } from "../../utils/constants";

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

export const getTransactionsStartAsync = () => {
  return (dispatch) => {
    dispatch(getTransactionsStart());
    axios
      .get("transactions/" + id)
      .then((res) => {
        const transactions = res.data.data;
        dispatch(getTransactionsSuccess(transactions));
      })
      .catch((error) => {
        if (error.response.data) {
          dispatch(getTransactionsFailure(error.response.data));
        } else if (error.message) {
          dispatch(getTransactionsFailure(error.message));
        }
      });
  };
};

//GETTING ALL TRANSACTIONS
const getAllTransactionsStart = () => ({
  type: TransactionTypes.GET_ALL_TRANSACTIONS_START,
});

const getAllTransactionsSuccess = (transactions) => ({
  type: TransactionTypes.GET_ALL_TRANSACTIONS_SUCCESS,
  payload: transactions,
});

const getAllTransactionsFailure = (message) => ({
  type: TransactionTypes.GET_ALL_TRANSACTIONS_FAILURE,
  payload: message,
});

export const getAllTransactionsStartAsync = () => {
  return (dispatch) => {
    dispatch(getAllTransactionsStart());
    axios
      .get("transactions")
      .then((res) => {
        const transactions = res.data;
        dispatch(getAllTransactionsSuccess(transactions));
      })
      .catch((error) => {
        if (error.response.data) {
          dispatch(getAllTransactionsFailure(error.response.data));
        } else if (error.message) {
          dispatch(getAllTransactionsFailure(error.message));
        }
      });
  };
};

//CREATE TRANSACTIONS
const createTransactionStart = () => ({
  type: TransactionTypes.CREATE_TRANSACTION_START,
});

const createTransactionSuccess = (transaction) => ({
  type: TransactionTypes.CREATE_TRANSACTION_SUCCESS,
  payload: transaction,
});

const createTransactionFailure = (message) => ({
  type: TransactionTypes.CREATE_TRANSACTION_FAILURE,
  payload: message,
});

export const createTransactionStartAsync = (transactionData) => {
  return (dispatch) => {
    dispatch(createTransactionStart());
    axios
      .post("transactions/", { ...transactionData })
      .then((res) => {
        const transaction = res.data;
        dispatch(createTransactionSuccess(transaction));
      })
      .catch((error) => {
        if (error.response.data) {
          dispatch(createTransactionFailure(error.response.data));
        } else if (error.message) {
          dispatch(createTransactionFailure(error.message));
        }
      });
  };
};

//DELETE TRANSACTIONS
const deleteTransactionStart = () => ({
  type: TransactionTypes.DELETE_TRANSACTION_START,
});

const deleteTransactionSuccess = (id) => ({
  type: TransactionTypes.DELETE_TRANSACTION_SUCCESS,
  payload: id,
});

const deleteTransactionFailure = (message) => ({
  type: TransactionTypes.DELETE_TRANSACTION_FAILURE,
  payload: message,
});

export const deleteTransactionStartAsync = () => {
  return (dispatch) => {
    dispatch(deleteTransactionStart());
    axios
      .delete("transactions/" + id)
      .then((res) => {
        const transactions = res.data;
        dispatch(deleteTransactionSuccess(transactions._id));
      })
      .catch((error) => {
        if (error.response.data) {
          dispatch(deleteTransactionFailure(error.response.data));
        } else if (error.message) {
          dispatch(deleteTransactionFailure(error.message));
        }
      });
  };
};

//UPDATE TRANSACTIONS
const updateTransactionStart = () => ({
  type: TransactionTypes.UPDATE_TRANSACTION_START,
});

const updateTransactionSuccess = (transaction) => ({
  type: TransactionTypes.UPDATE_TRANSACTION_SUCCESS,
  payload: transaction,
});

const updateTransactionFailure = (message) => ({
  type: TransactionTypes.UPDATE_TRANSACTION_FAILURE,
  payload: message,
});

export const updateTransactionStartAsync = (id, status) => {
  return (dispatch) => {
    dispatch(updateTransactionStart());
    axios
      .patch("transactions/" + id, { status })
      .then((res) => {
        const transaction = res.data;
        dispatch(updateTransactionSuccess(transaction));
      })
      .catch((error) => {
        if (error.response.data) {
          dispatch(updateTransactionFailure(error.response.data));
        } else if (error.message) {
          dispatch(updateTransactionFailure(error.message));
        }
      });
  };
};
