import React, { useContext, useEffect, useRef, useState } from 'react'
import { Autcontext } from './Authcontext'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'

function Login() {
    const ctx = useContext(Autcontext)
    const uname = useRef('')
    const email = useRef('')
    const pass = useRef('')
    const navigate = useNavigate();
    const checklogin = localStorage.getItem("Isloggedin")

    // old functionalities
    // const formsubmit = (event) => {
    //     event.preventDefault()
    //     const u = uname.current.value
    //     const e = email.current.value
    //     const p = pass.current.value
    //     if (u, e, p) {
    //         localStorage.setItem("Username", u)
    //         localStorage.setItem("Email", e)
    //         localStorage.setItem("Password", p)
    //         localStorage.setItem("Isloggedin", true)
    //         ctx.check(true)
    //     }
    //     else {
    //         alert("Fill all the fields")
    //     }
    // }
    
    // if (checklogin && ctx.showcheck == true) {
    //     navigate('/Dashboard')
    // }else{
    //     navigate('/Login')
    // }


    // new one

    const formsubmit=(event)=>{
        event.preventDefault()
        const u = uname.current.value
        const e = email.current.value
        const p = pass.current.value
        // console.log(ctx.data)
        // const foundeddata=ctx.data.finI((element)=>element.e_mail===e)
        // console.log(ctx.e_mail)

    }

    return (
        <>
            {/* {(checkacc == true) ? <Dashboard /> : */}
            <form onSubmit={formsubmit} className='col-md-6'>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" ref={uname} placeholder="Harry" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" ref={email} placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" ref={pass} placeholder="password" />
                </div>
                <button className="btn btn-primary mt-1" type='submit' style={{ width: '100px' }} > Login</button>

            </form>
            {/* } */}
        </>
    )
}

export default Login
