import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers"; 
import { createEpicMiddleware } from 'redux-observable'
import fetchUserEpic from "../epic/epic"

const epicMiddleware = createEpicMiddleware(fetchUserEpic)

export default function configureStore() {
  let store = createStore(reducers, applyMiddleware(epicMiddleware));
  sagaMiddleware.run(dataSage)
  return store;
}
