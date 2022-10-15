const initialState = {
  seller: [],
  cities: [],
  product: [],
  price: [],
  diet: []
}

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {

    case 'GET_SELLER':
      return {
        ...state,
        seller: actions.payload
      }

    case 'GET_CITIES':
      return {
        ...state,
        cities: actions.payload
      }
    case 'GET_DIET':
      return {
        ...state,
        diet: actions.payload
      }


    case 'GET_PRODUCT': {
      return {
        ...state,
        product: actions.payload
      }
    }

    case 'FILTRO_PRECIO': {
      const ordenPrecio = actions.payload === 'mayor'

        ? state.product.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (b.price > a.price) return -1;
          return 0;
        })
        : state.product.sort((a, b) => {

          if (a.price > b.price) return -1;
          if (b.price > a.price) return 1;
          return 0;
        });
      return {
        ...state,
        price: ordenPrecio

      };
    }

    default:
      return state
  }
}
