import Axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* LoginAsync(props) {
  const info = props.payload;
  try {
    const recievedData = yield Axios.post(props.url, info);
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
