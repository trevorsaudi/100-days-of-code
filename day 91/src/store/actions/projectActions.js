export const createProject = (project) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
// the dispatch method dispatches the action to the reducer
//make async call to database
const firestore = getFirestore(); //gives us a reference to the firestore databsase
firestore.collection('projects').add({ //adds this new document to the firestore collection, it is async
    ...project, //spreading the title and content from the state
    authorFirstName:'Trevor',
    authorLastName:'Saudi',
    authorId:12345,
    createdAt: new Date()
}).then(()=>{
    dispatch({type: 'CREATE_PROJECT', project}) 
    // the action being dispatched here (create_project) is being passed into the reducer
}).catch((err)=>{
    dispatch({type: 'CREATE_PROJECT_ERROR', err})
})

    }
};