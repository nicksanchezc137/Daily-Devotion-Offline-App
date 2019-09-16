import { 
    SET_DAY
} from '../actions/types';
const initialState = 1;


export const reducer = (state = initialState, action) => {
    switch(action.type){

        case SET_DAY:
            return  action.payload;
        default:
            return state;
    }

}


