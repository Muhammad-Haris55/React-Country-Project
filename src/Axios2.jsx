import React, { useRef } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

// function Axios2() {

//     const title=useRef('')
//     const content=useRef('')

//     const [data, setData] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         let isMounted = true;  // Flag to track if the component is mounted
//         async function getApiData() {
//             try {
//                 const resp = await axios.get("https://dummyjson.com/products?limit=10&skip=10&select=title,price");
//                 if (isMounted) {
//                     setData(resp.data.products);
//                 }
//             } catch (e) {
//                 if (isMounted) {
//                     setError(e.message);
//                 }
//             }
//         }
//         getApiData();
//         return () => {
//             isMounted = false;  // Cleanup function to set isMounted to false
//         };
//     }, []);



//     const formSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const a = content.current.value
//             const b = title.current.value
//             const posting = await axios.post("https://jsonplaceholder.typicode.com/posts", { content:a,title:b });

//             // console.log(posting);
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     return (
//         <>
//             {error && <h2>{error}</h2>}
//             <div className="cardholder">
//                 {data.map((items) => (
//                     <div className="card" key={items.id}>
//                         <h4>Title: {items.title}</h4>
//                         <h4>Item No: {items.id}</h4>
//                         <p>Price: {items.price}</p>
//                     </div>
//                 ))}
//             </div>

//             <h2 className='text-center mt-3'>Axios Post Method</h2>
//             <div className="inputhandler">
//                 <form onSubmit={formSubmit}>
//                     <div className="row g-3 align-items-center">
//                         <div className="col-auto">
//                             <label htmlFor="inputTitle" className="col-form-label">Title:</label>
//                         </div>
//                         <div className="col-auto">
//                             <input type="text" id="inputTitle" className="form-control" ref={title} name='title' />
//                         </div>
//                         <div className="col-auto">
//                             <label htmlFor="inputContent" className="col-form-label">Post:</label>
//                         </div>
//                         <div className="col-auto">
//                             <input type="text" id="inputContent" className="form-control" ref={content} name="content" />
//                         </div>
//                     </div>
//                     <button type="submit" className="btn btn-primary my-2 text-center" >Submit</button>
//                 </form>
//                     {/* <button type="button" className="btn btn-primary my-2" onClick={handleinput}>Submit</button> */}
//             </div>
//         </>
//     );
// }

function Axios2() {
    const [datas, setData] = useState([])
    const [error, setError] = useState('')
    const head = useRef('')
    const body = useRef('')
    useEffect(() => {
        let flag = true
        async function getApiData() {
            try {
                const resp = await axios.get('https://dummyjson.com/products')
                if (flag) {
                    setData(resp.data.products)
                }
            }
            catch (e) {
                if (flag) {
                    setError(e.message)
                }
            }
        }
        getApiData()
        return () => {
            flag = false
        }
    }, [])


    const [perror, serror] = useState('')
    const handleform = async (event) => {
        event.preventDefault()
        try {
            const headholder = head.current.value
            const bodyholder = body.current.value
            const postdata = await axios.post("https://jsonplaceholder.typicode.com/posts", { head: headholder, body: bodyholder })
            console.log(postdata)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            {error != " " && <h3>{error} </h3>}
            <div className="cardholder">

                {
                    datas.map((products) => {
                        return (
                            <div className="card" key={products.id}>
                                <h6 className='text-center'>Title: {products.title}</h6>
                                <h6>Item No: {products.id}</h6>
                                <p>Price: {products.price}</p>
                            </div>

                        )
                    })
                }
            </div>
            <h2>Axios Post Method</h2>
            {perror != " " && <h3>{perror}</h3>}
            <div className="inputhandler">
                <form onSubmit={handleform}>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="inputTitle" className="col-form-label">Title:</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="inputTitle" className="form-control" ref={head} name='title' />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="inputContent" className="col-form-label">Post:</label>
                        </div>                         <div className="col-auto">
                            <input type="text" id="inputContent" className="form-control" ref={body} name="content" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary my-2 text-center" >Submit</button>
                </form>
                {/* <button type="button" className="btn btn-primary my-2" onClick={handleinput}>Submit</button> */}
            </div>

        </>

    )
}
export default Axios2;
