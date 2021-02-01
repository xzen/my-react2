import { combineReducers } from 'redux';
import productsList from './components/products-list/reducer';
import cart from './components/cart/reducer';

export default combineReducers({
  productsList,
  cart,
});
