import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchNews } from "../../api/fetchNews"
import { fetchCommentsRoot} from "../../api/fetchComments"

export const newsFetcher = createAsyncThunk(
    'news/fetchAll',
    async (_, {rejectWithValue}) => 
        await fetchNews()
            .catch(error => rejectWithValue(error.message))
)

export const commentsRootFetcher = createAsyncThunk(
    'comments/fetchRoots',
    async (newsId, {rejectWithValue}) => 
        await fetchCommentsRoot(newsId)
            .catch(error => rejectWithValue(error.message))
)