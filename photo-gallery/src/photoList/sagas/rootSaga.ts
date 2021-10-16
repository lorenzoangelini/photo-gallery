import { all, fork } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import { setPhotoListSaga } from "./photoList";

const allSagas: any[] = [
    setPhotoListSaga
]


export function* rootSaga(): SagaIterator{
    yield all(allSagas.map(s => fork(s)))
}