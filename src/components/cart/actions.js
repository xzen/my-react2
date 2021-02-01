export const actionsType = {
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
};

export const addProductToCart = (product) => ({
  type: actionsType.ADD_PRODUCT_TO_CART,
  product,
});
