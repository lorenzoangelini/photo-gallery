import { EffectMiddleware } from "@redux-saga/core";
import { batch } from "react-redux"
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import { rootSaga } from "./rootSaga";

const effectMiddleware = (next => effect => {
    if(effect){
        batch(() => next(effect));
        return
    }
    next(effect);

}) as EffectMiddleware;

export default function configureStore(): {store: Store } {

    const sagaMiddleware = createSagaMiddleware({
        effectMiddlewares: [effectMiddleware]
    })

    const middlewares = [
        sagaMiddleware
    ]

    const store = createStore(
        combineReducers(reducers),
        applyMiddleware(...middlewares)
      )

      sagaMiddleware.run(rootSaga)

      return {store: (store as unknown) as Store}


}