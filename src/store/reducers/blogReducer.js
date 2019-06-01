const initState = {
    blogs: [
        {id: '1', title: 'Fishing on the Delta', content: 'Salmon hitting on south Fork'},
        {id: '2', title: 'Stripers hitting hard', content: 'Stripers hitting south Feather River'},
        {id: '3', title: 'Skunked', content: 'No crappies left at Berryesa.'}
    ]
}

const blogReducer = (state = initState, action) => {
    return state 
}

export default blogReducer