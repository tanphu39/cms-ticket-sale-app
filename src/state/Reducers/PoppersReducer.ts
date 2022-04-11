import {openclosePopperAction} from '../Actions'
import { ActionType } from '../Action-types'

const initialState = false;

const popperReducer = (state = initialState, action: openclosePopperAction) => {
    switch(action.type) {
        case ActionType.OPEN_POPPER:
            return true;
        case ActionType.CLOSE_POPPER:
            return false;
        default:
            return state;
    }
}

export default popperReducer;