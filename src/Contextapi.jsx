import React, { useContext } from 'react'
import { Apicontext } from './Context/Apicontext'

function Contextapi() {
    const Counter =useContext(Apicontext)

    const inc=()=>{
        
        Counter.setState(Counter.state+1) 
    }
    const dec=()=>{
        if(Counter.state==0){
            return 0
        }
        Counter.setState(Counter.state-1) 
    }
    return (
        <>
            <h1>Count is {Counter.state} </h1>
            <button onClick={inc} >Increment </button>
            <button onClick={dec}>Decrement </button>
        </>

    )
}

export default Contextapi
