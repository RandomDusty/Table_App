import { dataTableReducer } from './dataTableReducer';
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    dataTable: dataTableReducer
})

export type RootState = ReturnType<typeof rootReducer>