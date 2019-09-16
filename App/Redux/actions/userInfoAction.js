import { SET_LOGGED_IN,SET_USER_NAME,SET_USER_FUID,FETCH_SET_USER_NAME} from './types';


export const setLoggedIn = status => {
    return{
        type: SET_LOGGED_IN,
        payload: status
    }
}

export const setUserName = name => {
    return{
        type: SET_USER_NAME,
        payload: name
    }
}

export const setFuid = fuid => {
    return{
        type: SET_USER_FUID,
        payload: fuid
    }
    
}

export const fetchSetName = fuid => {
    return{
        type: FETCH_SET_USER_NAME,
        payload: fuid
    }
    
}

