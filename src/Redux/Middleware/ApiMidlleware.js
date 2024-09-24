import axios from "axios"
import { Getitems, Gettingerror } from "../Productreducer"
import { Fetchsproducts } from "../Productreducer"

// Store,next,action hota ha pr hmy dispatch chaye tha aur wo store m hota hai to hm n use  destructure kr lia h
// export const ApiMidlleWare = (store) => (next) => (action) => {

//     const Baseurl = "https://fakestoreapi.com"
//     const { dispatch }=store
//     if (action.type === "api/makeapicall") {
//         // console.log(action.payload.onStart)
//         async function getapidata() {
//             try {
//                 dispatch(Fetchsproducts())
//                 const { data } = await axios.get(`${Baseurl}/${action.payload.url}`)
//                 dispatch(Getitems(data))
//             } catch (e) {
//                 dispatch(Gettingerror())
//             }
//         }
//         getapidata()
//     } else {
//         next(action)
//     }
// }


export const ApiMidlleWare=(store)=>(next)=>(action)=>{
    const Baseurl = "https://fakestoreapi.com"
    if(action.type==="api/makecall"){
        const {dispatch}=store
        async function getapidata(){
            try{
                dispatch(Fetchsproducts())
                const {data}=await axios.get(`${Baseurl}/${action.payload.SubUrl}`)
                dispatch(Getitems(data))

            }
            catch(err){
                dispatch(Gettingerror)()
            }
        }
        getapidata()
    }
    else{
        next(action)
    }
}