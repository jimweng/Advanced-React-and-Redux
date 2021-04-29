// three functions return functions
export default ({ dispatch }) => next => action => {
    // Check if the action has a promise
    // If does, wait for it to resolve
    // If doesn't, then send the action on the next middleware

    if(!action.payload || !action.payload.then) {
        return next(action);
    }

    // if we have promise
    action.payload.then(function(response){
        const newAction = { ...action, payload:response };
        dispatch(newAction);
    })
}

// is equal to
/**
 *  export default ({dispatch}, next, action) {}
 * 
 */