import { combineReducers } from "redux"
import { loaderReducer } from "../sagas/Loader/LoaderReducer"
import FeatureSlice from "../sagas/Feature1/FeatureSlice"

export const rootReducer = combineReducers({
  loader: loaderReducer,
  feature:FeatureSlice
})