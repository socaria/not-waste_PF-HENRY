const initialState = {
  seller: [],
  cities: [],
  product: [],
  price: [],
  diet: [],
  customer: [],
  prodDetails: [],
  allSeller: [],
  queryParams: {},
  errorMessage: "",
};

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "GET_SELLER":
      return {
        ...state,
        seller: actions.payload,
        allSeller: actions.payload,
        queryParams: actions.query,
      };
    case "REQUEST_ERROR":
      return {
        ...state,
        errorMessage: actions.payload,
      };

    case "GET_CITIES":
      return {
        ...state,
        cities: actions.payload,
      };
    case "GET_DIET":
      return {
        ...state,
        diet: actions.payload,
      };

    // case "FILTER_BY_CITY":
    //   const allSeller = state.allSeller.map((e) => ({
    //     id: e.id,
    //     name: e.name,
    //     image: e.image,
    //     adress: e.adress,
    //     category: e.category,
    //     cities: e.cities.map((c) => c.name),
    //     cuit: e.cuit,
    //     email: e.email,
    //     products: e.products.map((d) => ({
    //       name: d.name,
    //       price: d.price,
    //     })),
    //   }));
    //   const filterSeller = allSeller.filter((e) =>
    //     e.cities.includes(actions.payload)
    //   );
    //   return {
    //     ...state,
    //     seller: filterSeller,
    //   };

    case "GET_PRODUCT": {
      return {
        ...state,
        product: actions.payload,
        queryParams: actions.query,
      };
    }

    case "GET_CUSTOMER":
      return {
        ...state,
        customer: actions.payload,
      };

    case "PROD_DETAIL":
      return {
        ...state,
        prodDetails: actions.payload,
      };

    case "POST_PRODUCT":
      return {
        ...state,
        seller: actions.payload,
      };

    default:
      return state;
  }
}
