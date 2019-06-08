import { NEW_USER,
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED
 } from '../actions';

const initState = {
    user: {
        name: null,
        lastName: null,
        userName: null,
        password: null,
        email: null,
    },
    isLogginIn:false,
    loginUser: {},
    error: "",
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
        case LOGIN_USER_PENDING:
                return {
                    ...state,
                    isLogginIn: action.isLogginIn,
                }            
        case LOGIN_USER_SUCCESS:
            console.log('reducer', action);
            return {
                ...state,
                isLogginIn: action.isLogginIn,
                loginUser: action.loginUser,
                error: "",
            }            
        case LOGIN_USER_FAILED:
            return {
                ...state,
                isLogginIn: action.isLogginIn,
                error: action.error,                
            }            
        
        default:
            return state;
    }
} 