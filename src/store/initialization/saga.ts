import { enonceArr } from './../../backend/datas/enonce';
import { editorSlice } from './../editor/slice';
import { consoleSlice } from './../console/slice';
import { enonceSlice } from './../enonce/slice';
import { initializationActions } from './action';
import { put, takeEvery } from 'redux-saga/effects';
import { initialCode } from '../../backend/datas/code';

export function* initializationSaga() {
  try {
    yield put(enonceSlice.actions.enonceIsActive(true));
    yield put(enonceSlice.actions.enonceMessage(enonceArr[0]));
    yield put(consoleSlice.actions.consoleMessage(['']));
    const codeInit = initialCode[0].toString();
    yield put(editorSlice.actions.editorCode(codeInit));
  } catch (error) {
    console.log('initialization failed :', error);
  }
}

export function* initializationWatcher() {
  yield takeEvery(
    initializationActions.INITIALIZATION_START,
    initializationSaga
  );
}
