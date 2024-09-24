import { configureStore } from "@reduxjs/toolkit";
import Datareducer from "./Datareducer";
import { ThunkMiddleware2 } from "./Middleware2/ThunkMiddleware2";

export const store2=configureStore({
    reducer:{
        Data:Datareducer
    },
    middleware:(defaultmiddleware)=>[...defaultmiddleware(),ThunkMiddleware2]
})