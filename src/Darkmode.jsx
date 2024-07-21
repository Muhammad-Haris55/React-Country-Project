import React, { useEffect, useState } from 'react'

function Darkmode() {
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem("handle")))
    console.log(JSON.parse(localStorage.getItem("handle")))
    function handlemode() {
        setMode(!mode)
        console.log(mode)
        localStorage.setItem("handle", !mode)
    }
    if (mode) {
        document.body.classList.add("dark")
        console.log(mode)
        
    }
    else {
            document.body.classList.remove("dark")
    }
    return (
        <>

            <button type="button" className="btn btn-primary my-2 text-center" onClick={handlemode} >Switch Mode</button>

        </>

    )
}

export default Darkmode
