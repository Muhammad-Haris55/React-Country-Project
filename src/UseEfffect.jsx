import React, { useEffect, useState } from 'react'
import axios from 'axios'
function UseEfffect() {

    const [data, setData] = useState([])
    let mount=true
    // UseEffect basically state ko monitor krny k lie hota hai agr ap is k dependency p koi state pass kr do aur wo state contious change ho rhy ho to wo fr dfa rerender kry g component ko,aur is k depency m multiple var,states pass kr skty agr wo change ho to yh us component ko re render krta ha,agr is dependency list ko empty chor d to wo aik h dfa run hota hai
    useEffect(() => {
        let flag=true
        async function getapidata() {
            try {
                const resp = await axios.get("https://dummyjson.com/products")
                if(flag){
                    setData(resp.data.products)
                }
            }
            catch (e) {
                if(flag){
                    alert(e.message)
                }
            }
            // running cleanup function if true it will run
            if(mount==true){
                setData([])
                // flag=false
            }
            // console.log(internalId)
        }
        getapidata()
        let timerId=setInterval(() => {
            console.log("interval running")
        },[1000]);
        // Agr kbhi ksi component ko remove krna ho means unmount krna hota tb lgaty h cleanup function mostly routing k time use hota hai
        return()=>{
            // flag=false
            // clearInterval(timerId)
            clearInterval(timerId)
        }
    },[])
    // console.log("Hi")
    // (mount==true)?setData([]):''

    return (
        <>
            <div className="cardholder">
                {
                    data.map((product) => {
                        return (
                            <div className="card" key={product.id}>
                                <h6 className='text-center'>Title: {product.title}</h6>
                                <h6>Item No: {product.id}</h6>
                                <p>Price: {product.price}</p>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}

export default UseEfffect
