const initState = {
    authError: null
} 

const authReducer = (state= initState, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('error')
            return {
                ...state, 
                authError: 'Login Failed'
            }
            case 'LOGIN_SUCCESS' :
                console.log('login success')
                return{
                    ...state, //prevents overriding of the previous state
                    authError: null
                }
                default:
                    return state;
            }

}

export default authReducer