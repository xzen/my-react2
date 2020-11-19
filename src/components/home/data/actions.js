export const actionsType = {
  PRODUCT_SEARCH: 'PRODUCT_SEARCH',
  PRODUCT_SHOW: 'PRODUCT_SHOW'
};

export const productShow = (id) => ({
  type: actionsType.PRODUCT_SHOW,
  id
});

export const productSearch = (wordSearch) => ({
  type: actionsType.PRODUCT_SEARCH,
  wordSearch
});
