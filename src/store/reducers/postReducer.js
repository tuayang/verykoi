const initState = {
    posts: [
        {id: '1', title: 'Fishing on the Delta', content: 'Salmon hitting on south Fork'},
        {id: '2', title: 'Stripers hitting hard', content: 'Stripers hitting south Feather River'},
        {id: '3', title: 'Skunked', content: 'No crappies left at Berryesa.'}
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST': 
        console.log('created post', action.post);
    }
    return state 
}

export default postReducer