import { createStore, applyMiddleware } from "redux";
// import {
//   useDispatch as useReduxDispatch,
//   useSelector as useReduxSelector,
// } from "react-redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

// Middleware Set up
const middlewares = [thunk, logger];
if (process.env.NODE_ENV === "production") middlewares.pop();

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

// export const useSelector = useReduxSelector;
// export const useDispatch = () => useReduxDispatch();

export { store, persistor };
