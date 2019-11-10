import { all } from 'redux-saga/effects';
import watchMainSaga from '../sagas/mainSaga';

export default function* saga() {
  yield all([
    watchMainSaga(),
  ]);
}
