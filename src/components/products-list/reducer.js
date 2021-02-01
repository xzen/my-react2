const initialState = [{
  id: '1263HGD',
  name: 'lait',
  price: 5.00,
  img: 'https://media.toupargel.fr/p-565x436/16853-2-lait-de-chevre-demi-ecreme-candia-1-l-23190.jpg',
}, {
  id: '24736FHD',
  name: 'bonbon',
  price: 1.00,
  img: 'https://www.bonbon-foliz.com/7705-large_default/bonbon-dragibus-soft-haribo-boite-de-300-pieces.jpg',
}];

const productsList = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsList;
