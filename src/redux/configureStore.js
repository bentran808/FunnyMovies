import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancer = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
     shouldHotReload: false
    }) : compose;

const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware (...middlewares)];
  const store = createStore (rootReducer, composeEnhancer (...enhancers));
  return store;
};

export default configureStore;
