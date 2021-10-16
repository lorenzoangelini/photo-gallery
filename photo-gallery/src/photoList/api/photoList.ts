import { PHOTO_LIST } from "../urls";

export function apiFetchPhotoList(){
    return fetch(PHOTO_LIST, {
        method: 'GET',
    }).then(res => res.json());
}