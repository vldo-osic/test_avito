import { createSlice } from "@reduxjs/toolkit"
import { commentsRootFetcher } from "./actionCreator"

const initialState = {
    commentsList: [],
    isLoading: false,
    error: '', 
}

export const commentsListSlice = createSlice({
    name: 'commentsList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(commentsRootFetcher.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(commentsRootFetcher.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.commentsList = action.payload
        })
        builder.addCase(commentsRootFetcher.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default commentsListSlice.reducer