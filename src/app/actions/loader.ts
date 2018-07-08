import { Dispatch } from 'redux';


export enum LoaderEnumType {
    Show = 'SHOW_LOADER',
    Hide = 'HIDE_LOADER'
}


export interface LoaderAction {
    type: LoaderEnumType,
}


export const showLoader = () => (dispatch: Dispatch) =>
    dispatch({
        type: LoaderEnumType.Show,
    });

export const hideLoader = () => (dispatch: Dispatch) =>
    dispatch({
        type: LoaderEnumType.Hide,
    });
