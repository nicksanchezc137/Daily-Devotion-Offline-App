import { SET_LOGGED_IN,SET_USER_NAME,SET_USER_FUID,FETCH_SET_USER_NAME} from '../actions/types';
import {getUser} from '../getUser'
const initialState = {
    name:'no-name',
    loggedIn:false,
     fuid:""
};


export const reducer = (state = initialState, action) => {
    switch(action.type){

        case SET_LOGGED_IN:
            let userObj1 = Object.assign({}, state, {
                loggedIn: action.payload
                })
            return userObj1;

        case SET_USER_NAME:
                let userObj2 = Object.assign({}, state, {
                    name: action.payload
                    })
                return userObj2;

        case SET_USER_FUID:
                let userObj3 = Object.assign({}, state, {
                    fuid: action.payload
                    })
                return userObj3;  
        case FETCH_SET_USER_NAME:
             getUser(action.payload).then((user)=>{
                 console.log('after fetch the user is ',user)
                 let userObj4 = Object.assign({}, state, {
                    name: user.name
                    })
                return userObj4; 
                })
                 
        default:
            return state;
    }

}


