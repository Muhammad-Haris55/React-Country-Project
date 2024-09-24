import React, { useContext, useRef, useState } from 'react'
import { Autcontext } from './Authcontext'


function SIgnup() {
    const ctx = useContext(Autcontext)
    const Uname = useRef('')
    const Email = useRef('')
    const Pass = useRef('')
    const Pno = useRef('')

    const formsubmit = () => {

        const u_name = Uname.current.value
        const e_mail = Email.current.value
        const password = Pass.current.value
        const p_n = Pno.current.value

        // Sending multiple enteries
        ctx.userdata([...ctx.data,{
            u_name,
            e_mail,
            password,
            p_n
        }])
    }
    return (
        <>
            <div className="col-md-6 " style={{ padding: '10px' }}>
                <div class="mb-3">
                    <form>

                        <label for="exampleFormControlInput1" class="form-label mb-1" >Username</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" ref={Uname} placeholder="" />

                        <label for="exampleFormControlInput1" class="form-label mb-1" >Email</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" ref={Email} placeholder="" />

                        <label for="exampleFormControlInput1" class="form-label" >Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" ref={Pass} placeholder="" />

                        <label for="exampleFormControlInput1" class="form-label" >Phone Number</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" ref={Pno} placeholder="" />

                        <button className="btn btn-primary mt-1" type='button' style={{ width: '100px' }} onClick={formsubmit}> Sign up</button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default SIgnup
