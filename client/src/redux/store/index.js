// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../reducer';

// export const store = configureStore({
//   reducer: rootReducer
// });
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

const composeEnhancers =(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;

export const store = createStore(rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);