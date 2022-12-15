import { createSlice } from "@reduxjs/toolkit"
import { newsFetcher } from "./actionCreator"

const initialState = {
    newsList: [],
    isLoading: false,
    error: '', 
}

export const newsListSlice = createSlice({
    name: 'newsList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(newsFetcher.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(newsFetcher.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.newsList = action.payload
        })
        builder.addCase(newsFetcher.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default newsListSlice.reducer