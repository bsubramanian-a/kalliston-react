import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import authHeader from './auth-header';

const baseUrl = "https://kalliston-api.onrender.com/api/v1/packages/";
// const baseUrl = 'http://localhost:8000/api/v1/packages/';

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
    tagTypes: ['Packages'],
    endpoints: (builder) => ({
        getPackages: builder.query({
            query: () => `get-packages`,
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            providesTags: (result, error, id) => [{ type: 'Packages', id }],
        }),
        getPackage: builder.query({
            query: (id) => ({
                url: `packages/get-package/${id}`,
                method: 'GET',
            }),
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            providesTags: (result, error, id) => [{ type: 'Packages', id }],
        }),
        createPackage: builder.mutation({
            query: (data) => ({
                url: `add-package`,
                method: 'POST',
                body: { data },
            }),
            invalidatesTags: ['Packages'],
        }),
        updatePackage: builder.mutation({
            query: (data) => ({
                url: `packages/update-package/${data.package_id}`,
                method: 'PUT',
                body: { data },
            }),
            invalidatesTags: ['Packages'],
        }),
        deletePackage: builder.mutation({
            query: (id) => ({
            url: `packages/delete-package/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['Packages'],
        }),
    }),
});
  
export const { useGetPackagesQuery, useCreatePackageMutation, useGetPackageQuery, useUpdatePackageMutation, useDeletePackageMutation } = packageApi;