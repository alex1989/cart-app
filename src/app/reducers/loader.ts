import { LoaderEnumType, LoaderAction } from '../actions/loader';

export interface Loader {
    show: boolean;
}

const initialState: Loader = {
    show: false
};

export const loader = (state = initialState, action: LoaderAction) => {
    switch (action.type) {
        case LoaderEnumType.Show:
            return {
                show: true
            };
        case LoaderEnumType.Hide:
            return {
                show: false
            };
        default:
            return state;
    }
};
