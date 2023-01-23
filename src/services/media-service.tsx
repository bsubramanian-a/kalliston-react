import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:8000/api/v1/medias/';

export const mediaApi = createApi({
    reducerPath: 'mediaApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = JSON.parse(localStorage.getItem("accesstoken") || "");
            console.log("token", token);
            headers.set('Access-Control-Allow-Origin', '*')
            if(token) headers.set('Authorization', `Bearer ${token}`)
          
            return headers
        },
    }),
    tagTypes: ['Media'], 
    endpoints: (builder) => ({
        getMedias: builder.query({
            query: () => `get-coach-medias`,
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            providesTags: (result, error, id) => [{ type: 'Media', id }],
        }),
        createMedia: builder.mutation({
            query: (data) => ({
                url: `create-media`,
                method: 'POST',
                body: { data },
            }),
            invalidatesTags: ['Media'],
        }),
        updateMedia: builder.mutation({
            query: (data) => ({
                url: `update-media/${data.id}`,
                method: 'PUT',
                body: { data },
            }),
            invalidatesTags: ['Media'],
        }),
        deleteMedia: builder.mutation({
            query: (id) => ({
            url: `delete-media-image/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['Media'],
        }),
    }),
});
  
export const { useGetMediasQuery, useDeleteMediaMutation, useCreateMediaMutation, useUpdateMediaMutation } = mediaApi;