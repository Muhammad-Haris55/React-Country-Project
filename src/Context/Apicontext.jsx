// import { createContext, useState } from "react";

// // Context bnaya 
// export const CounterContext=createContext(null)


// // Us context ko Provider ka andr rap kr dia as a provider
// export const ContextProvider=(props)=>{
//     const [data,setdata]=useState("HElllo")
//     return(
//         <CounterContext.Provider value={{data}}>
//             {props.children}
//         </CounterContext.Provider>
//     );
// };




// Counter Example
// import { createContext, useState } from "react";
import { useState } from "react"
import { createContext } from "react"








export const Apicontext = createContext(null)

export const Contextprovider = (props) => {
    const [data, setdata] = useState(0)
    return (
        <Apicontext.Provider value={{ state: data, name: "Harris", setState: setdata }}>
            {props.children}
        </Apicontext.Provider>
    )
}






// React Api Project Implementation
export const Datacontext = createContext(null)
export const Dataprovider = (props) => {
    // We wil store the fetched api data here
    const [datas, setdatas] = useState([])
    return (
        <Datacontext.Provider value={{ getdata: setdatas, senddatas: datas }} >
            {props.children}
        </Datacontext.Provider>

    )
}



export const Cartcontext = createContext(null)
export const Cartprovider = (props) => {
    // Total Cart Items
    const [cart, setCart] = useState([])
    // Total Bill Of The Cart
    const [Total, setTotal] = useState(0)
    // console.log(cart)
    return (
        <Cartcontext.Provider value={{ update: setCart, show: cart, total: Total, settotal: setTotal }}>
            {props.children}
        </Cartcontext.Provider>
    )

}