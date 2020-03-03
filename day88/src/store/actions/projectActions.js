export const createProject = (project) =>{
    return (dispatch, getState) => {
// the dispatch method dispatches the action to the reducer
//make async call to database

dispatch({type: 'CREATE_PROJECT', project}) 
// the action being dispatched here (create_project) is being passed into the reducer

    }
};