export const createPost =(post) => {
    // dispatch parameter halts dispatch and makes async call to DB
    return (dispatch, getState) => {

        // make async call to DB
        dispatch({ type: 'CREATE_POST', post });
    
    }
};

