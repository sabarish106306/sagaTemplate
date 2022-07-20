import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import { watchSagas } from "../sagas/index";
import { rootReducer } from "./rootReducer";

// export default function getstore() {
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(watchSagas)
//     return store
// }
export default store;