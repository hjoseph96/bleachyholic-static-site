import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
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
        <Toaster position="bottom-left" />
      </PersistProvider>
    </Provider>
  );
};

export default AppBootstrap;
