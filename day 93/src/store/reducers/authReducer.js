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

            case 'SIGNOUT_SUCCESS':
                console.log('signout success')
                return state;
            case 'SIGNUP_SUCESS':
                console.log('signup success');
                return{
                    ...state,
                    authError:null
                }
                case 'SIGNUP_ERROR':
                    console.log('signup error');
                    return{
                        ...state,
                        authError:action.err.message
                    }
                default:
                    return state;
            }

}

export default authReducer