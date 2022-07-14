import { actionCall } from '../actions';
import {RECIEVE,REQUEST} from  '../constant';

const initState = {
    data:[],
}

const callReducer = (state = initState, action) =>{
    switch(action.type){
        case REQUEST:
            return {...state,data:action.payload};
        default:
            return{ state} ;   
    }
}

export default callReducer;