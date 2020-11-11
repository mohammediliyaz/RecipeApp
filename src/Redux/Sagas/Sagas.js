import Axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* LoginAsync(action) {
  const info = action.payload;
  try {
    const recievedData = yield Axios.post(action.url, info);
    if (recievedData.status === 200) {
      yield put({ type: "LOGIN_ASYNC", value: recievedData.data.idToken });
    }
  } catch (error) {
    yield put({ type: "LOGIN_ASYNC_ERROR", error });
  }
}

export function* watchLogin() {
  yield takeLatest("login", LoginAsync);
}
