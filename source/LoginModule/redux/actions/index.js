export const NEW_USER = "[LOGIN][USER] new user";

/**
 * user = { name, email, password }
 */
export const newUser = (user) => {
    return {
        type:NEW_USER,
        user,
    }
}

/**
 * user = { name, email, password }
 */
export const casaCall = (user) => {
    return {
        type:'CASA',
    }
}