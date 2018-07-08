import * as styles from './style.scss';
import * as React from 'react';
import { CartItem } from 'app/models/CartItem';
import * as plus from 'app/images/plus.svg';
import * as minus from 'app/images/minus.svg';
import * as remove from 'app/images/remove.svg';


export namespace CartItemComponent {
  export interface Props {
    item: CartItem;
    updateCartItem: any;
    removeCartItem: any;
  }
}

export class CartItemComponent extends React.Component<CartItemComponent.Props> {
  render() {
    const { item, updateCartItem, removeCartItem } = this.props;

    return (
      <li className={styles.item}>
        <div className={styles.image}>
          <img src="https://placekitten.com/g/100/100" alt=""/>
        </div>
     
        <div className={styles.description}>
          <span>{ item.title }</span>
          <span>{ item.description }</span>
        </div>

        <div className={styles.quantity}>
          <button
            className={styles["btn-add"]}
            onClick={() => updateCartItem(item, item.quantity + 1)}
          >
            <img src={plus} alt="" />
          </button>
          <span>{ item.quantity }</span>
          <button
            className={styles["btn-minus"]}
            onClick={() => updateCartItem(item, item.quantity - 1)}
          >
            <img src={minus} alt="" />
          </button>
        </div>

        <div className={styles.actions}>
          <button
            className={styles["btn-delete"]}
            onClick={() => removeCartItem(item)}
          >
            <img src={remove} alt="" />
          </button>
          <span className={styles.amount}>$ { item.cost }</span>
        </div>
      </li>
    )
  }
};
