import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { userReducer } from "./reducers";
import { loggedIn } from "./reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"],
};
const rootReducer = combineReducers({
  user: userReducer,
  loggedIn,
});

export default persistReducer(persistConfig, rootReducer);
