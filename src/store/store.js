import { combineReducers, configureStore } from "@reduxjs/toolkit"
import news from './reducers/newsListSlice'
import comments from './reducers/commentsListSlice'

const rootReducer = combineReducers(
    {
        news,
        comments,
    }
)
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}