import { createAction } from "typesafe-actions";
import { PhotoListResponse } from "../type/photoList";

export const getPhotoList = createAction(
 'photoList/GET_USER_LIST'
)();

export const setPhotoListSuccess = createAction(
    'userList/SET_USER_LIST_SUCCESS'
)<PhotoListResponse>();


export const setLoading = createAction(
    'userList/SET_LOADING'
)<boolean>();


export const setError = createAction(
    'userList/SET_ERROR'
)<any>();