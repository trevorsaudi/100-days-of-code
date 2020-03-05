import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore' //syncs state to firebase


const rootReducer = combineReducers({
    auth: authReducer,
    project:projectReducer,
    firestore: firestoreReducer //firestoreReducer syncs the firestore property 
                                //on the state to the data in the database
                                //we move on to tell the firestore property
                                //which data we want to sync   
});

export default rootReducer  