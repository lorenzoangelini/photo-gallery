import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as selectors from '../selectors';
import * as actions from '../actions';

export const usePhotoList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getPhotoList())
    },[dispatch])

    const photoList = useSelector(selectors.selectPhotoList)
    const isLoading = useSelector(selectors.selectIsLoading)

    return {
        photoList,
        isLoading
    }
}