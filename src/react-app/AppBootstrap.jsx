import { useEffect } from 'react';
import { Provider } from 'react-redux';
import PersistProvider from './store/providers/persist-provider';
import { store } from './store/store';
import { setProducts } from './store/slices/product-slice';
import products from './data/products.json';
import App from './App.jsx';
import './i18n';

store.dispatch(setProducts(products));

const AppBootstrap = () => {
  return (
    <Provider store={store}>
      <PersistProvider>
        <App />
      </PersistProvider>
    </Provider>
  );
};

export default AppBootstrap;
