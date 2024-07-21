import React, { useState } from 'react'

import Childprop from './Childprop'
function StatevsProps() {
    const [apple1, setApple1] = useState(5)
    const [apple2, setApple2] = useState(10)
    let Country1="USA"
    let Country2="UK"
    // const [datachild,setdatachild]=useState("HI")
    // function getchilddata(data){
    //     setdatachild(data)
    // }
    // getchilddata()
    return (
        <>
            <Childprop apple1count={apple1} apple2count={apple2} c1={Country1} c2={Country2} />
            {/* <p>{datachild}</p> */}

            <div className='btnholder'>
                <div>
                    <button type="button" className="btn btn-primary " onClick={() => {
                        setApple1(apple2 + apple1)
                    }} >Increment1 </button>
                </div>

                <div>
                    <button type="button" className="btn btn-primary " onClick={() => {
                        setApple2(apple1 + apple2)
                    }} >Increment2 </button>

                </div>

            </div>
        </>


    )
}

export default StatevsProps
