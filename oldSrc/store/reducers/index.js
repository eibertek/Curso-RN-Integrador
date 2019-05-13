// placeReducer.js
import { REHYDRATE } from 'redux-persist';
import {ADD_REGISTRY, INIT_STORE} from '../actions/types/main';

const initialState = {
  name: 'SARASSA',
  dolar: 0.00,
  registry: [],
};

const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_STORE:
      return {
        ...state,
        name: action.name,
      };
    case ADD_REGISTRY:
      return {
        ...state,
        registry: [...state.registry, action.data]
      };
    case REHYDRATE:
      const payload = action.payload && action.payload.main || {};
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

export default mainReducer;