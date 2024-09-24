import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    endpoints:(builder)=>({
        getTodos:builder.query({
            query:()=>"/todos"
        }),
    }),
});

// export const{getTodos}=api 
// export const{useGetTodosQuery}=api 