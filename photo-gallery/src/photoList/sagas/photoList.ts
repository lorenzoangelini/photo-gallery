import { put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions'
import * as api from '../api'
import { PhotoListResponse } from '../type';


function* setPhotoListRequestSaga(
    action: ReturnType<typeof  actions.getPhotoList>
): SagaIterator {
    try{
        yield put(actions.setLoading(true))
        const response: PhotoListResponse = yield call(api.apiFetchPhotoList)
        yield put(actions.setPhotoListSuccess(response))
        yield put(actions.setLoading(false))
    }catch(e){
        yield put(actions.setError(e))
    }
}

export function* setPhotoListSaga() {
    yield takeEvery(actions.getPhotoList, setPhotoListRequestSaga);
  }