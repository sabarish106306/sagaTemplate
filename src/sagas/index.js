import { all } from "redux-saga/effects"
import { FeatureSaga1 } from "./Feature1/FeatureSagas"
export function* watchSagas() {
  yield all([
    FeatureSaga1()
  ])
}