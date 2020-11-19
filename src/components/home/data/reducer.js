import { actionsType } from './actions';

const initalState = {
  resultsSearch: [],
  data: [{
    id: '1',
    name: 'JAMES BOND',
    qte: 6,
    price: 12.99,
    img: 'https://fr.web.img3.acsta.net/c_210_280/pictures/20/09/02/11/19/3750789.jpg'
  }, {
    id: '2',
    name: 'JINGLE JANGLE : UN NOËL ENCHANTÉ',
    qte: 2,
    price: 6.99,
    img: 'https://fr.web.img4.acsta.net/f_png/c_210_280/o_logo-netflix-n.png_5_se/pictures/20/10/28/16/39/1066933.jpg'
  }, {
    id: '3',
    name: 'GAGARINE',
    qte: 1,
    price: 19.99,
    img: 'https://fr.web.img3.acsta.net/c_210_280/pictures/20/06/22/08/46/2536282.jpg'
  }]
};

const productSearch = (state, action) => {
  const { wordSearch } = action;
  const { data } = state;

  return ({
    data,
    resultsSearch: data.filter((product) => {
      const { name } = product;

      return name.toLowerCase().includes(wordSearch.toLowerCase());
    })
  });
};

const productShow = (state) => (state);

const data = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.PRODUCT_SEARCH:
      return productSearch(state, action);
    case actionsType.PRODUCT_SHOW:
      return productShow(state, action);
    default:
      return state;
  }
};

export default data;
