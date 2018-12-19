import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from "../actions/types";
import getPeople from "../actions/test";
import { put, takeEvery } from "redux-saga/effects";

function* fetchData(action) {
  try {
    const data = yield getPeople();
    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (error) {
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData);
}

export default dataSaga;
