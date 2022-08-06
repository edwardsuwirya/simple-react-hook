import {hookReducer} from "./redux/hookReducer";
import {combineReducers, createStore} from "redux";
import {customerOrderReducer} from "./redux/customerOrder/customerOrderReducer";

const rootReducer = combineReducers({
    hookReducer,
    customerOrderReducer
})
export const setupStore = () => {
    return createStore(rootReducer)
}