import { CartItem } from '../models/CartItem';
import { CartEnumActions, CartAction } from '../actions/cart';
import { Cart } from './state';

const initialState: Cart = {
  goods: [],
  total: 0
};


const getTotal = (items: CartItem[]) => items.reduce(
  (total: number, item: CartItem) => {
    return total + Number(item.cost) * item.quantity;
  },
  0
);


export const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartEnumActions.Fetch:
      return {
        goods: action.payload,
        total: getTotal(action.payload),
      } as Cart;
    case CartEnumActions.Remove:
      const filteredGoods: CartItem[] = state.goods.filter(
        (cartItem: CartItem) => cartItem.id !== action.payload.id
      );
      return {
        goods: filteredGoods,
        total: getTotal(filteredGoods)
      } as Cart;
    case CartEnumActions.Update:
      let goods: CartItem[] = state.goods.map(
        (cartItem: CartItem) => {
          if (cartItem.id !== action.payload.id) {
            return cartItem;
          }
          return action.payload;
        }
      );
      return {
        goods,
        total: getTotal(goods)
      } as Cart;
    default:
      return state;
  }
};
