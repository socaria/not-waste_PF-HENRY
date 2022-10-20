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
  orders: [],
  cart: [],
  payId: [],
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

    case "ADD_CART":
      return {
        ...state,
        cart: actions.payload,
      };

    case "POST_PAY":
      return {
        ...state,
        payId: actions.payload,
      };
    default:
      return state;
  }
}
