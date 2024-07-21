import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// Axios aur Fetch api m yh differce ha k fetch api m ap response jo ata api ka usy ap json format m convert krty ho aur axios m apko json format m comverted data milta hai to us ko conver krny k need nhi hoti
function Axios() {
    // const APIUrl = 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
    const [mydata, setData] = useState([])
    const [errors, seterror] = useState("")
    const title = useRef('')
    const content = useRef('')
    // Using promises
    // useEffect(() => {
    //      function getdata() {
    //         axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    //             .then((resp) => setData(resp.data.products))
    //             .catch((error) => { seterror(error.message) })
    //     }
    //     getdata()

    // },[])

    // better using async and await 
    useEffect(() => {
        let mounted = true
        async function getapidata() {
            try {
                const resp = await axios.get("https://dummyjson.com/products?limit=10&skip=10&select=title,price")
                if (mounted) {
                    setData(resp.data.products)
                }
            } catch (e) {
                if (mounted) {
                    seterror(e.message)
                }

            }
        }

        getapidata()
        return () => {
            mounted = false
        }
    }, [])


    const formSubmit = async (event) => {
        event.preventDefault()
        try {
            const titleholder = title.current.value
            const contentholder = content.current.value
            const postdata = await axios.post("https://jsonplaceholder.typicode.com/posts", { title: titleholder, content: contentholder })
            console.log(postdata)
        } catch (e) {
            console.log(e)

        }
    }
    return (
        <>
            <h1>Bismillah</h1>
            {errors !== "" && <h2>{errors}</h2>}
            <div className="cardholder">
                {
                    mydata.map((product) => {
                        const { id, title, price } = product
                        return (

                            <div className='card' key={id}>

                                <h4>Title:{title}</h4>
                                <h5>Item no:{id}</h5>
                                <p>{price}</p>
                            </div>
                        )
                    })
                }

            </div>


            <h2 className='text-center mt-3'>Axios Post Method</h2>
            <div className="inputhandler">
                <form onSubmit={formSubmit}>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="inputTitle" className="col-form-label">Title:</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="inputTitle" className="form-control" ref={title} name='title' />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="inputContent" className="col-form-label">Post:</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="inputContent" className="form-control" ref={content} name="content" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary my-2 text-center" >Submit</button>
                </form>
            </div>

        </>
    )
}

export default Axios
