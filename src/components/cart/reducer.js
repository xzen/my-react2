import { actionsType } from './actions';

const initialState = {
  count: 0,
  products: [],
};

const addProductToCart = (state, action) => ({
  count: state.products.length,
  products: state.products.concat(action.product),
});

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_PRODUCT_TO_CART:
      return addProductToCart(state, action);
    default:
      return state;
  }
};

export default cart;
