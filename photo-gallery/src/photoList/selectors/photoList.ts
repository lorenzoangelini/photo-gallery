import { createSelector } from "reselect";
import { State } from "../reducer";

const selectState = (state: {photoList: State}) => state;

export const selectPhotoList = createSelector(
    selectState,
    slice => slice?.photoList.response
);

export const selectIsLoading = createSelector(
    selectState,
    slice => slice?.photoList.isLoading
);