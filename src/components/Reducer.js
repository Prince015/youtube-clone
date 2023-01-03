export const initialState = {
    videos : [],
    toggle : false,
    user : null,
    nextPageToken : null,
    totalResults : null
}

export const actionTypes = {
    fetch_videoList : 'fetch_videoList',
    toggleBar : 'toggleBar',
    SET_USER : 'SET_USER',
    log_out : 'log_out'
}

const reducer = (state, action) =>{
    // console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER :
            return {
                ...state, 
                user : action.user
            }
        case actionTypes.log_out :
            return {
                ...state, 
                user : null
            }
        case actionTypes.fetch_videoList :
            return {
                ...state, 
                videos : [...action.video]
            }
        case actionTypes.toggleBar :
            return {
                ...state, 
                toggle : action.toggle
            }
        default:
            return state
    }
} 

export default reducer