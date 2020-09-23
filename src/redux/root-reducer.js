import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user-reducer/user.reducer";
import adminReducer from "./admin-reducer";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
});

export default persistReducer(persistConfig, rootReducer);
