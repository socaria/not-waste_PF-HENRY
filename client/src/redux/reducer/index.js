const initialState = {
    seller:[]
}

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {

  case 'GET_SELLER':
    return { ...state,
        seller: actions.payload
    }

  default:
    return state
  }
}
