import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
    name: "Data",
    initialState: {
        list: []
    },
    reducers: {
        Getdata(state, action) {
            state.list = action.payload
        }
    }
})

const { Getdata } = slice.actions
export const GetApiData = (dispatch) => {
    async function getapidata() {
        try {
            const { data } = await axios.get('https://restcountries.com/v3.1/all')
            console.log(data)
            dispatch(Getdata(data))
        } catch (e) {
            console.log(e.message)
        }

    }
    getapidata()
}
export default slice.reducer
