import { ActionType} from "../Action-types";
import { Dispatch } from "redux";
import { openclosePopperAction } from "../Actions"

export const openPopper = () => {
    return(dispatch: Dispatch<openclosePopperAction>) => {
        dispatch({
            type: ActionType.OPEN_POPPER,
        })
    }
}

export const closePopper = () => {
    return(dispatch: Dispatch<openclosePopperAction>) => {
        dispatch({
            type: ActionType.CLOSE_POPPER,
        })
    }
}