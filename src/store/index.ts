import { createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch

export default store;