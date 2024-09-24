import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <>

            <h2 classname="text-ccenter">Welcome Home!</h2>
            <h4>
                {/* Hi  */}
            </h4>
            <div className="container-fluid">

                <NavLink to="/login">
                    <button className="btn btn-primary mt-1" type='submit' style={{ width: '100px' }} > Login</button>
                </NavLink>
                <NavLink to="/Signup">
                    <button className="btn btn-primary mt-1" type='submit' style={{ width: '200px' }}> Sign Up</button>
                </NavLink>
            </div>

        </>
    )
}

export default Home
