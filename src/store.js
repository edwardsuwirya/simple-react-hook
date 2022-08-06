import {hookReducer} from "./redux/hookReducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    hookReducer
})
export const setupStore = () => {
    return createStore(rootReducer)
}