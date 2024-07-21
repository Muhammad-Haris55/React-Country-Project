import React from 'react'

import StatevsProps from './StatevsProps'
function Childprop(props) {
    // console.loga(getdata)
    console.log(props.apple1count)
    console.log(props.apple2count)
    console.log(props.person)
    

    return (
        <>
            <div className='btnholder'>

                <div>
                
                    {/* console.log(props.applecount1) */}
                    <p>{props.c1}</p>
                    <p>Apple Count 1: {props.apple1count}</p>
                    {/* <button type="button" className="btn btn-primary " >Increment1 </button> */}
                </div>

                <div>

                    <p>{props.c2}</p>
                    <p>Apple Count 2:{props.apple2count}</p>
                    {/* <button type="button" className="btn btn-primary " >Increment2 </button> */}

                </div>

            </div>

        </>
    )
}

export default Childprop
