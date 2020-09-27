import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bankReducer from "./bank/bank.reducer";
import referralReducer from "./referral/referrals.reducer";
import supportReducer from "./support/support.reducer";
import transactionReducer from "./transaction/transactions.reducer";
import authReducer from "./auth/auth.reducer";
import userReducer from "./users/users.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["transaction", "user", "referral", "bank", "user", "auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  bank: bankReducer,
  referral: referralReducer,
  transaction: transactionReducer,
  support: supportReducer,
});

export default persistReducer(persistConfig, rootReducer);
