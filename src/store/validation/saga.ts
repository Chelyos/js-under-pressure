import { enonceArr } from './../../backend/datas/enonce';
import { consoleSlice } from './../console/slice';
import { enonceSlice } from './../enonce/slice';
import { testMethods } from './../../backend/__test__/testMethods';
import { validationActions } from './action';
import { validationSlice } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createFunction } from '../../services/create-function/createFunction';
import { initialCode } from '../../backend/datas/code';
import { editorSlice } from '../editor';
import { comparator } from '../../backend/comparator';

type Action = {
  code: string;
  indice: number;
};

export function* validationSaga(action: PayloadAction<Action>) {
  try {
    let { code, indice } = action.payload;
    const func = yield call(createFunction, code);
    const result = comparator(func, testMethods[indice]);
    if (indice + 1 >= testMethods.length) {
      yield put(editorSlice.actions.editorCode(''));
      yield put(enonceSlice.actions.enonceIsActive(false));
      yield put(consoleSlice.actions.consoleMessage(['Success !']));
      yield put(enonceSlice.actions.enonceMessage(enonceArr[indice + 1]));
      return;
    }

    indice += 1;

    if (result.status && indice < initialCode.length) {
      const newCode = initialCode[indice].toString();
      yield put(editorSlice.actions.editorCode(newCode));
      yield put(validationSlice.actions.validationSuccess(indice));
      yield put(enonceSlice.actions.enonceMessage(enonceArr[indice]));
      yield put(consoleSlice.actions.consoleMessage(result.log));
    } else {
      yield put(consoleSlice.actions.consoleError(result.log));
    }
  } catch (error) {
    yield put(consoleSlice.actions.consoleError([error]));
    console.log(error);
  }
}

export function* validationWatcher() {
  yield takeEvery(validationActions.VALIDATION_START, validationSaga);
}
