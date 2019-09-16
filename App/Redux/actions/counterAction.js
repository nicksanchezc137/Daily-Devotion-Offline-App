import { SET_DAY} from './types';

export const setDay = day => {
    return{
        type: SET_DAY,
        payload: day
    }
}
