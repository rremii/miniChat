import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Ipost {
    id: number
    title: string
}

export const postsApi = createApi({
    reducerPath: 'PostAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<Ipost[], any>({
            query: () => `posts`,
            providesTags: ['Post'],
        }),
        addPost: builder.mutation<void, Partial<string | number>>({
            query: (newTitle: string | number) => ({
                url: `/posts`,
                method: 'Post',
                body: {title: newTitle}
            }),
            invalidatesTags: ['Post'],
        }),
        deletePost: builder.mutation<void, Partial<number>>({
            query: (id: number) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post'],
        }),

    }),
})
