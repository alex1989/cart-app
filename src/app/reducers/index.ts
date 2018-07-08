import { RouterState } from 'connected-react-router';
import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { RootState, Cart } from './state';
import { cartReducer } from './cart';
import { loader } from "app/reducers/loader";

export { RootState, RouterState, Cart };


export const rootReducer = (combineReducers as any)({
  cart: cartReducer,
  form: reduxFormReducer,
  loader
});
