import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory, History } from 'history';
import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { configureStore } from './app/store';
import { App } from './app';



// prepare store

// https://designmodo.com/shopping-cart-ui/
// https://github.com/rokoroku/react-redux-typescript-boilerplate
// https://www.mockapi.io/projects/5b3e10b1c3c3fb0014742757
const history: History = createBrowserHistory();
const store = configureStore(history);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history}/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./app', () => {
    render()
  });
}
