export const actionsType = {
  ADD_PRODUCT_CADDY: 'ADD_PRODUCT_CADDY',
  DELETE_PRODUCT_CADDY: 'DELETE_PRODUCT_CADDY'
};

export const addProductCaddy = (product) => ({
  type: actionsType.ADD_PRODUCT_CADDY,
  product
});

export const deleteProductCaddy = (productId) => ({
  type: actionsType.DELETE_PRODUCT_CADDY,
  productId
});
