import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import adminReducer from "./admin";
import landingReducer from "./landing";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"],
};
const rootReducer = combineReducers({
  user: userReducer,
  landing: landingReducer,
  admin: adminReducer,
});

export default persistReducer(persistConfig, rootReducer);
