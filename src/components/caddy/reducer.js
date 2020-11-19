import { actionsType } from './actions';

const initialState = [];

const addProductCaddy = (state, action) => {
  const { product } = action;

  return state.concat([product]);
};

const deleteProductCaddy = (state, action) => {
  const { productId } = action;

  return state.filter((product) => (product.id !== productId));
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_PRODUCT_CADDY:
      return addProductCaddy(state, action);
    case actionsType.DELETE_PRODUCT_CADDY:
      return deleteProductCaddy(state, action);
    default:
      return state;
  }
};

export default data;
