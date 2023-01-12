import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import authHeader from './auth-header';

const baseUrl = 'http://localhost:8000/api/v1/companies/';

export const packageApi = createApi({
    reducerPath: 'packageApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = JSON.parse(localStorage.getItem("accesstoken") || "");
            // console.log("token", token);
            headers.set('Access-Control-Allow-Origin', '*')
            if(token) headers.set('Authorization', `Bearer ${token}`)
          
            return headers
        },
    }),
    tagTypes: ['Companies'],
    endpoints: (builder) => ({
        getCompanies: builder.query({
            query: () => `companies`,
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            providesTags: (result, error, id) => [{ type: 'Companies', id }],
        }),
        getPackage: builder.query({
            query: () => ({
                url: `get-package`,
                method: 'GET',
            }),
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            providesTags: (result, error, id) => [{ type: 'Companies', id }],
        }),
        createPackage: builder.mutation({
            query: (data) => ({
                url: `create-package`,
                method: 'POST',
                body: { data },
            }),
            invalidatesTags: ['Companies'],
        }),
        updatePackage: builder.mutation({
            query: (data) => ({
                url: `update-package/${data.package_id}`,
                method: 'PUT',
                body: { data },
            }),
            invalidatesTags: ['Companies'],
        }),
        deletePackage: builder.mutation({
            query: (id) => ({
            url: `companies/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['Companies'],
        }),
    }),
});
  
export const { useGetCompaniesQuery, useCreatePackageMutation, useGetPackageQuery, useUpdatePackageMutation } = packageApi;