const usersReducer = (state = {
    user: {}, 
    login: false,
    loading:true
}, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload,
                login: true,
                loading: false
            }

        case 'LOGOUT_USER':
            return {
                ...state,
                user: {},
                login: false
            }

        case 'CREATE_TRADE':
            return {
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}

export default usersReducer