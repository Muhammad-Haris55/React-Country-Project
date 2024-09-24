import { createContext, useState } from "react";

export const Autcontext = createContext(null)



export const Authprovider = (props) => {
    const [checkacc, setacccheck] = useState(false)
    const [data, userdata] = useState([])
    // console.log(data)
    return (
        <Autcontext.Provider value={{ check: setacccheck, showcheck: checkacc, userdata: userdata,data:data }}>
            {props.children}
        </Autcontext.Provider>
    )
}


