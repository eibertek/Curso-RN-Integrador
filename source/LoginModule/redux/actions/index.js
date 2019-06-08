import {    persistor } from '../../../store';

export const NEW_USER = "[LOGIN][USER] new user";
export const LOGIN_USER_PENDING = "[LOGIN][USER] loggin user pending";
export const LOGIN_USER_SUCCESS = "[LOGIN][USER] loggin user success";
export const LOGIN_USER_FAILED = "[LOGIN][USER] loggin user failed";

/**
 * user = { name, email, password }
 */
export const newUser = (user) => {
    return {
        type:NEW_USER,
        user,
    }
}

export default function request(user,pass) {
    let res = {
        status:'error: login invalido'
    };
    if( user === '12' && pass === '12') {
        res = {
            status: 'ok',
            token: '120928391ksdjksd9093132',
        }
    }
    return new Promise((resolve, reject) => {
        if(res.status==='error'){
            reject(res);
        }
        setTimeout(() => resolve(res), 1500);
    });
  }

export const loginUser = (user,pass) => {    
    // llamar a una api
    // si recibo ok dispatcho la accion success
    // si recibo error dispatcho la accion failed
    return (dispatch) => {
        dispatch(loginUserPending());
        try{
            request(user, pass).then(data => {
                if(data.status !=='ok'){
                    return dispatch(loginUserFailed('Ocurrio un error al tratar de loguearse'));
                }
                console.log(data);
                dispatch(loginUserSuccess(data));
            })
            .catch( error => {
                dispatch(loginUserFailed(error));
            });
            
        }
        catch(error){
            return dispatch(loginUserFailed(error));
        }
    }
}
  
export const loginUserPending = () => {
    return {
        type: LOGIN_USER_PENDING,
        isLogginIn: true,
    }
}

export const loginUserSuccess = (loginUser) => {
    return {
        type: LOGIN_USER_SUCCESS,
        isLogginIn: false,
        loginUser,
    }
}

export const loginUserFailed = (error) => {
    return {
        type: LOGIN_USER_FAILED,
        isLogginIn: false,
        error,
    }
}