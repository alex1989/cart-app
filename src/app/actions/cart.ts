import { Dispatch } from 'redux';
import { CartItem } from '../models/CartItem';
import { get, remove, put } from 'app/request';
import { showLoader, hideLoader } from "./loader";

export enum CartEnumActions {
  Fetch = 'FETCH_CART_ITEMS',
  Remove = 'REMOVE_CART_ITEM',
  Update = 'UPDATE_CART_ITEM',
};

export interface CartAction {
  type: CartEnumActions,
  payload: any;
};

export const fetchCart = () => (dispatch: Dispatch) => {
    (dispatch as any)(showLoader());
    get('/cart').then((items: CartItem[]) => {
        dispatch({
            type: CartEnumActions.Fetch,
            payload: items,
        })
    }).then(() => {
        (dispatch as any)(hideLoader());
    })
}
export const removeCartItem = (cartItem: CartItem) => (dispatch: Dispatch) =>
  remove(`/cart/${cartItem.id}`).then((res) => {
    dispatch({
      type: CartEnumActions.Remove,
      payload: cartItem
    })
  });


export const updateCartItem = (cartItem: CartItem, quantity: number) => (dispatch: Dispatch) => {
    cartItem.quantity = quantity;
    put(`/cart/${cartItem.id}`, cartItem).then((item: CartItem) => {
        dispatch({
            type: CartEnumActions.Update,
            payload: item,
        })
    });
}
