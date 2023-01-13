import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import authHeader from './auth-header';

const baseUrl = 'http://localhost:8000/api/v1/users/';

export const coachApi = createApi({
    reducerPath: 'coachApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            if(localStorage.getItem("accesstoken")){
                const token = JSON.parse(localStorage.getItem("accesstoken") || "");
                  // console.log("token", token);
                headers.set('Access-Control-Allow-Origin', '*')
                if(token) headers.set('Authorization', `Bearer ${token}`)
            }
          
            return headers
        },
    }),
    tagTypes: ['Coach'],
    endpoints: (builder) => ({
        getCoaches: builder.query({
            query: () => `get-coaches`,
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            providesTags: (result, error, id) => [{ type: 'Coach', id }],
        }),
        getCoach: builder.query({
            query: (id) => ({
                url: `get-coach/${id}`,
                method: 'GET',
            }),
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            providesTags: (result, error, id) => [{ type: 'Coach', id }],
        }),
        createCoach: builder.mutation({
            query: (data) => ({
                url: `create-coach`,
                method: 'POST',
                body: { data },
            }),
            invalidatesTags: ['Coach'],
        }),
        validateCoachOtp: builder.mutation({
            query: (data) => ({
                url: `coach-otp`,
                method: 'POST',
                body: { data },
            }),
            transformResponse: (response: { data:any }, meta, arg) => response,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response,
            invalidatesTags: ['Coach'],
        }),
        updateCoach: builder.mutation({
            query: (data) => ({
                url: `update-coach/${data.id}`,
                method: 'PUT',
                body: { data },
            }),
            invalidatesTags: ['Coach'],
        }),
        deleteCoach: builder.mutation({
            query: (id) => ({
            url: `delete-coach/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['Coach'],
        }),
    }),
});
  
export const { useGetCoachesQuery, useCreateCoachMutation, useValidateCoachOtpMutation, useGetCoachQuery, useUpdateCoachMutation, useDeleteCoachMutation } = coachApi;