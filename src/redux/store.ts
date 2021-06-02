import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMW from 'redux-thunk'
import {capacitiesR} from "./capacitiesR/capacitiesR";

let reducersList = combineReducers({
    capacitiesR
})
export type RootState = ReturnType<typeof reducersList>

const composeEnhancers =
    typeof window === 'object' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMW)
);
let store = createStore(reducersList, enhancer)
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>


export default store