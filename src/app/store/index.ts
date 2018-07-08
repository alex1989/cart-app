import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { History } from 'history';
import thunk from 'redux-thunk';
import { RootState, rootReducer } from 'app/reducers';


export function configureStore(history: History, initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(thunk, routerMiddleware(history));


  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const reducers = connectRouter(history)(rootReducer);

  const store = createStore(
    reducers as any,
    initialState as any,
    middleware
  ) as Store<RootState>;

  // Reload reducers
  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      store.replaceReducer(connectRouter(history)(rootReducer as any))
    })
  }

  return store;
}
