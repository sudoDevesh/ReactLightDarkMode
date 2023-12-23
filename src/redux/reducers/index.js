import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import autoMergeLevel2  from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import theme from "./theme";

const persistConfig = {
  key: "root",
  whitelist: ["theme"],
  storage,
  stateReconciler: autoMergeLevel2,
};
const rootReducer = combineReducers({
  theme
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
