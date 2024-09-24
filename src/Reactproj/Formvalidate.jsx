import React, { useRef, useState } from 'react'
import "./Form.css"
import ContextForm from './ContextForm'

function Formvalidate() {
    const [titles, settitle] = useState([])
    const t = useRef('')
    const a = useRef('')
    const c = useRef('')
    const i = useRef('')
    const [position, setposition] = useState({
        "top": '',
        "left": ''
    })
    const [rowtitle, setrowtitle] = useState('')
    const formsubmit = (event) => {
        event.preventDefault()
        const tit = t.current.value
        const amo = a.current.value
        const cat = c.current.value
        settitle([...titles, { "title": tit, "amount": amo, "Category": cat }])
    }
    const Rembtn = (i) => {
        const titlename = i.title
        const index = titles.findIndex((element) => element.title === titlename)
        const newarr = [...titles]
        newarr.splice(index, 1)
        settitle(newarr)
    }
    // Open Close Context + sending props
    const openContext = (event, item) => {
        event.preventDefault()
        setrowtitle(item.title)
        setposition({
            "top": event.clientY + 5,
            "left": event.clientX + 5,
        })

    }
    return (
        <>
            <div className="formhead" style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                {/* This is form fields  */}
                <div className="col-md-6 " style={{ padding: '10px' }}>
                    <div class="mb-3">
                        <form>

                            <label for="exampleFormControlInput1" class="form-label mb-1" >Title</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" ref={t} placeholder="" />

                            <select class="form-select mb-1" aria-label="Default select example" ref={c}>
                                <option selected hidden>Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="exampleFormControlInput1" class="form-label" >Amount</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" ref={a} placeholder="" />

                            <button className="btn btn-primary mt-1" type='button' style={{ width: '100px' }} onClick={formsubmit}> Add</button>
                        </form>
                    </div>
                </div>

                {/* This is table  */}
                <div className="col-md-6 col-sm-3" style={{ padding: '10px' }}>
                    <table class="table table-success table-striped" id='table2' onClick={() => setposition({ "top": '' })}>

                        <ContextForm setposition={setposition} position={position} rowtitle={rowtitle} titles={titles} settitles={settitle}/>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th>Quantity</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            titles.map((item, index) => {
                                return (
                                    <tbody>
                                        {/* (event) => openContext(event, item) */}
                                        <tr key={index} onContextMenu={(event) => openContext(event, item)}>
                                            <td scope="row" className='text-center' >{index + 1}</td>
                                            <td scope="row" className='text-center'>{item.title}</td>
                                            <td  >{item.amount}</td>
                                            <td className='text-center'>{item.Category}</td>
                                            <td className='text-center'><button className="btn btn-primary mt-1" type='button' style={{ width: '100%', fontSize: '12px' }} onClick={() => Rembtn(item)}>Remove</button></td>
                                        </tr>
                                    </tbody>

                                )

                            })

                        }
                    </table>
                </div>
            </div >
        </>
    )
}

export default Formvalidate
