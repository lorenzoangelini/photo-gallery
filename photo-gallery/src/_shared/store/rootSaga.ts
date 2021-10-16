import {all, call, spawn} from 'redux-saga/effects'
import {rootSaga as userListSaga} from '../../photoList'

export function* rootSaga(){
    const sagas: any[] = [
        userListSaga
    ]
    yield all(
        sagas.map(saga => 
            spawn(function*(){
                while(true){
                    try{
                        yield call(saga);
                        break;
                    } catch(e){
                        
                    }
                }
            })
            
        )  )
    }