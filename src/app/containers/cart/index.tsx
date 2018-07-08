import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
    fetchCart,
    removeCartItem,
    updateCartItem,
} from 'app/actions/cart';
import { RootState, Cart } from 'app/reducers';
import { CartItem } from 'app/models/CartItem';
import { CartItemComponent } from "app/components/cartItem";
import ReactPlaceholder from "react-placeholder/lib/ReactPlaceholder";
import { TextBlock, RectShape } from 'react-placeholder/lib/placeholders';
import "react-placeholder/lib/reactPlaceholder.css";
import {Loader} from "app/reducers/loader";
import * as styles from './style.scss';


interface Props extends RouteComponentProps<void> {
    cart: Cart;
    loader: Loader;
    actions: any;
}


const awesomePlaceholder: any = (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <RectShape color='gray' style={{width: '100px', height: '100px'}}/>
        <TextBlock rows={3} color='gray'/>
    </div>
);

@(connect as any)(
    (state: RootState): Pick<Props, 'cart' | 'loader'> => ({
        cart: state.cart,
        loader: state.loader
    }),
    (dispatch: Dispatch): Pick<Props, 'actions'> => ({
        actions: bindActionCreators({
            fetchCart,
            removeCartItem,
            updateCartItem,
        }, dispatch)
    })
)
export class CartApp extends React.Component<Props> {
  state = {
    loaded: false,
    startFetch: false,
  };

  componentDidMount() {
    this.setState({ startFetch : true });
    this.props.actions.fetchCart();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.state.startFetch && nextProps.loader.show === false) {
      this.setState({ loaded : true });
    }
  }

  render() {
    const { cart, actions } = this.props;

    return (
      <div className={styles.cart}>
        <ul>
          <ReactPlaceholder customPlaceholder={awesomePlaceholder} ready={this.state.loaded}>
              {cart.goods.map((cartItem: CartItem) => (
                <CartItemComponent
                  key={cartItem.id}
                  item={cartItem}
                  updateCartItem={actions.updateCartItem}
                  removeCartItem={actions.removeCartItem}
                />
              ))}
          </ReactPlaceholder>
          <li className={styles.total}>
              <div className={styles['align-to-right']}>
                  <span>$ { cart.total }</span>
                  <Link
                    className={styles['btn-buy']}
                    to={'/shipping'}
                  >
                      BUY
                  </Link>
              </div>
          </li>
        </ul>
      </div>
    );
  }
}
