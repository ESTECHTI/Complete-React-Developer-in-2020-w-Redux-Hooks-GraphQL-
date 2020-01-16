import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; //permite o browser armazenar o cache
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};