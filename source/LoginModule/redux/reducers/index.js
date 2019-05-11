
const initState = {
    user: {
        name: null,
        lastName: null,
        userName: null,
        password: null,
    }
}
export default (state=initState, action) => {
    switch(action.type) {
        default:
            return state;
    }
} 