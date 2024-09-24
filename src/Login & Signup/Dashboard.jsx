import React, { useContext, useEffect } from 'react'
import { Autcontext } from './Authcontext'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const ctx = useContext(Autcontext)
    const navigate = useNavigate()
    const checklogin = localStorage.getItem("Isloggedin")
    const Admin = localStorage.getItem("Username")
    useEffect(() => {
        if (!checklogin) {
            navigate('/')
        }
    }, [])

    const Logouthandle = () => {
        ctx.check(false)
        localStorage.removeItem("Isloggedin")
        navigate("/Login")
    }
    
    const Deletethandle = () => {
        localStorage.removeItem("Username")
        localStorage.removeItem("Email")
        localStorage.removeItem("Password")
        localStorage.removeItem("Isloggedin")
        ctx.check(false)
        navigate("/Login")
    }

    return (
        <>
            <h2 classname="text-ccenter">DASHBOARD</h2>
            <h4>
                Hi {Admin}
            </h4>
            <div className="container-fluid">

                <button className="btn btn-primary mt-1" type='submit' style={{ width: '100px' }} onClick={Logouthandle}> Logout</button>
                <button className="btn btn-primary mt-1" type='submit' style={{ width: '200px' }} onClick={Deletethandle}> Delete Account</button>
            </div>
        </>
    )
}

export default Dashboard
