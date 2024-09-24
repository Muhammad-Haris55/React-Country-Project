import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {Datacontext} from  "../Context/Apicontext"
// import { Card } from './Card'
import  { Card } from './Card'
import "./Carddetails2.css"

function Carddetails2() {
    const Singlecard=Card()

    // To fetch from url
    const param = useParams()
    // console.log(param.id)

    // 1st method To get state from Nav hook
    // const location = useLocation()
    // const datas = location.state.fapidata

    // 2nd method 
    // Getting the data directly from context api
    const data=useContext(Datacontext)

    // Filter Country
    const filtercountry = data.senddatas.filter((check) => check.name.common.includes(`${param.id}`))

    return (
        <>
            {
                filtercountry.map((items,index ) => {
                    return (
                        <Card items={items} index={index}/>
                    )
                })
            }
        </>

    )
}

export default Carddetails2
