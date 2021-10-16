import { ActionType, createReducer } from 'typesafe-actions'
import * as actions from '../actions'
import { PhotoListResponse } from '../type/photoList';
export type State = {
    response?: PhotoListResponse;
    isLoading: boolean;
}
const initialState: State = {
    response: {},
    isLoading: false,
}

type Types = ActionType<typeof actions>;

export const reducer = createReducer<State, Types>(initialState).handleAction(
    actions.setPhotoListSuccess,
    (state, actions) => ({
        ...state,
        response: actions.payload
    }))
    .handleAction(
        actions.setLoading,
        (state, actions) => ({
            ...state,
            isLoading: actions.payload
        }),
)

export default reducer;
