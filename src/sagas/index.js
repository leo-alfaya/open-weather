import { call, all, put, takeLatest } from 'redux-saga/effects';
import { LOAD_WEATHER_SAGA, SET_WEATHER } from '../store/actions';
import { getByCityNAme } from '../services/api';

function* loadWheaterSaga(action) {
  let jsonResponse = yield call(getByCityNAme, action.payload)
  yield put({
    type: SET_WEATHER,
    payload: jsonResponse
  })
}

export default function* rootSaga() {
  return yield all([
    yield takeLatest(LOAD_WEATHER_SAGA, loadWheaterSaga)
  ])
}