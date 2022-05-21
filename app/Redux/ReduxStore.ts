import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {postsApi} from "../api/api";


export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        // Products: ProductReducer,
    },
    middleware: (getDefaultMiddleware =>
        getDefaultMiddleware().concat(postsApi.middleware))
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store