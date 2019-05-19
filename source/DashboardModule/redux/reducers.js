import { SUCCESS, PENDING, FAILED } from "./actions";

const initialState = {
    dice: null,
    error:null,
    status: '',
}

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case SUCCESS:
        return { ...state, dice: data, status: SUCCESS }
    case PENDING:
        return { ...state, status: PENDING }
    case FAILED:
        return { ...state, 
            status: FAILED, 
            error,             
        }
            
    default:
        return state
    }
}
