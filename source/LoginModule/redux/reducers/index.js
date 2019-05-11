import { NEW_USER } from '../actions';

const initState = {
    user: {
        name: null,
        lastName: null,
        userName: null,
        password: null,
        email: null,
    }
}
export default (state = initState, action) => {
    switch(action.type) {
        case NEW_USER:
            return {
                ...state,
                user:{
                    name: action.user.name || '',
                    email: action.user.email || '',
                    password: action.user.password || '',
                }
            }
        default:
            return state;
    }
} 