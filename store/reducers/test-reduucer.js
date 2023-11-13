let initialState = {
    userId: 1,
    searchText: ''
}
export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case 'sn/test/SET_USER_ID':{
            return {
                ...state,
                userId: action.userId
            }
        }
        case 'sn/test/SET_SEARCH_TEXT':{
            return {
                ...state,
                searchText: action.text
            }
        }
        default:
            return state;
    }
}

export const actions = {
    setUserId: (userId) => ({type: 'sn/test/SET_USER_ID', userId}),
    setSearchText: (text) => ({type: 'sn/test/SET_SEARCH_TEXT', text}),
}
