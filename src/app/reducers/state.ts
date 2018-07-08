import { CartItem } from '../models/CartItem';
import { Loader } from './loader';
import { RouterState } from 'connected-react-router'
import { FormReducer } from 'redux-form';

export interface Cart {
  goods: CartItem[];
  total: number;
}


export interface RootState {
  cart: Cart;
  router: RouterState;
  form: FormReducer;
  loader: Loader;
}
