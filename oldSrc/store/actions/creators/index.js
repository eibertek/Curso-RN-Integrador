import { INIT_STORE, GET_DOLAR, ADD_REGISTRY } from '../types/main';

export const initStore = name => {
  return {
    type: INIT_STORE,
    name,
  }
}

export const getDolar = () => {
    return {
      type: GET_DOLAR,
    }
  }


export const addRegistry = (data) => {
    return {
        type: ADD_REGISTRY,
        data,
    }
}
