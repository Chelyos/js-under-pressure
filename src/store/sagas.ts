import {all} from 'redux-saga/effects';
import { initializationWatcher } from './initialization/saga';
import { validationWatcher } from './validation/saga';


export function* rootSaga() {
  yield all([
    validationWatcher(),
    initializationWatcher()
  ]);
}