import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const slice =createSlice({
    name:'Products',
    initialState:{
        list:[],
        loading:true,
        error:''
    },
    reducers:{
        Getitems(state,action){
            state.list=action.payload
        },
        Fetchsproducts(state){
            state.loading=false
        },
        Gettingerror(state){
            state.loading=false
            state.error="Something went wrong!"
        }   
    }
})
const {Fetchsproducts,Gettingerror}=slice.actions

export const Getapidata=()=>(dispatch) => {
    async function getapidata() {
        try {
            dispatch(Fetchsproducts())
            const { data } = await axios.get("https://fakestoreapi.com/products")
            dispatch(Getitems(data))

        }
        catch (err) {
            dispatch(Gettingerror)()
        }
    }
    getapidata()
}
export const {Getitems}=slice.actions
export default slice.reducer