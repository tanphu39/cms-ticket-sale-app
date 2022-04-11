import { combineReducers } from "redux";
import popperReducer from './PoppersReducer'

const reducers = combineReducers({
    pop: popperReducer,
})

export default reducers;

export type State = ReturnType<typeof reducers>