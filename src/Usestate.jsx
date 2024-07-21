import React, { useState } from 'react'

function Usestate() {
    // Use state array bna k kaam krty h direct yh apny update waly state function ko update nhi kr skty
    const [update,setupdate]=useState(0)
    const [update2,setupdate2]=useState(true)
    console.log("rendering")
    return (
        <>
            <h3 className='text-center my-2'>
                {update}
            </h3>
            <h3>
                True/False by Use State 
                {/* Conditional Rendering */}
                {(update2==true)?<p>True</p> :<p>False</p>}
               
            </h3>

            <div className='d-flex justify-content-center'>

            </div>
            {/* Yh kia kr rh k hr dfa by 1 h increment kry g kyu k one time execution horhy is ka sol ha nchy  */}
            <button type="button" className="btn btn-primary " onClick={(async)=>{
                setupdate(update+1)
                alert('hi')
                setupdate(update+1)
                alert('hi2')
            }}>Increment </button>
            <button type="button" className="btn btn-primary " onClick={()=>{
                setupdate((prev)=>prev+1)
                alert('hi')
                setupdate((prev)=>prev+2)
                setupdate((prev)=>prev+5)
            }}>Increment Solution </button>
            <button type="button" className="btn btn-primary " onClick={()=>{
                setupdate2((prev)=>
                    !prev)
                // alert(update2)
             }}>True/False </button>
             {/* <p></p> */}

        
        </>
    )
}

export default Usestate
