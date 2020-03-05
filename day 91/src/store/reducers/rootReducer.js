import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore' //syncs state to firebase
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project:projectReducer,
    firestore: firestoreReducer, //firestoreReducer syncs the firestore property 
                                //on the state to the data in the database
                                //we move on to tell the firestore property
                                //which data we want to sync   
    firebase: firebaseReducer //syncs the auth status to the firebase object in the state
                            });

export default rootReducer  