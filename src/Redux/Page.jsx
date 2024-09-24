import React, { useEffect, useState } from 'react'
import "../Reactproj/Main.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { additem, addmultipleitems, calculateprice } from './Cartreducer'
import { getcount } from '../Reactproj/Cart'
import { addtowishlist } from './Wishlistreducer'
import { getwishlistcount } from '../Reactproj/Wishlist'
import axios from 'axios'
import { Fetchsproducts, Getapidata, Getitems, Gettingerror } from './Productreducer'
import { getcartitems } from '../Reactproj/Cartcomponent'



function Page() {

    // Thats how you acess a redux store,by just returning the state you can get the whole state
    const reduxstoreproducts = useSelector((state) => (state.Product.list))
    // console.log(reduxstoreproducts)

    let reduxcartcount = useSelector((state) => state.Cart.length)
    let wishlist = useSelector((state) => state.Wishlist.length)
    const [count, reduxcount] = useState(reduxcartcount)
    const [wishcount, wishlistcount] = useState(wishlist)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.Product.loading)
    const error = useSelector((state) => state.Product.error)
    console.log(error)
    
    // API Calling in redux using thunk middleware
    useEffect(() => {
        // Thunk is bascially calling a call back function in a dispatch where traditionally in dispatch has an action as an object 
        dispatch(Getapidata())
    }, [])

    const addtocart = (items) => {
        const { id } = items
        let quantity = 1
        dispatch(additem({ id, quantity }))
        reduxcount((prevousstate) => prevousstate + 1)
    }

    const addtosishlist = (items) => {
        dispatch(addtowishlist(items.id, 1, items.title, items.image, items.price))
        wishlistcount((prevousstate) => prevousstate + 1)
    }
    getcount(count)
    getwishlistcount(wishlist)
    return (
        (error.length > 0) ? <h1 style={{ textAlign: 'center' }}>{error}</h1> :
            <>
                {loading ? (<h1 >Loading....</h1>) : (
                    <>
                        <div className='header'>
                            <h4 className='mt-2' onClick={() => (navigate("/"))}>SHOPEEEE</h4>
                            <span>
                                <p className='mt-3'>{count}</p>
                                <img src="./cart.png" alt="" id='cart' onClick={() => (navigate("/Cart"))} />
                                <p className='mt-3'>{wishcount}</p>
                                <img src="./wishlist.png" alt="" id='cart' onClick={() => (navigate("/Wishlist"))} />
                            </span>
                        </div>
                        <div className="cardholder mt-5" id='c3' style={{ width: '99%', flexWrap: 'wrap', overflow: 'hidden' }}>
                            {reduxstoreproducts.map((items, index) => {
                                return (
                                    <div className="card" key={index} style={{ height: '440px' }}>
                                        <img src={items?.image} alt="" />
                                        <div className="bottom">
                                            <h5>{items?.title}</h5>
                                            <h6>{items?.category}</h6>
                                            <h6>{items?.rating.rate}</h6>
                                            <h6>{items?.price}</h6>
                                            <button className="btn btn-primary mt-1" style={{ width: '150px' }} onClick={() => (addtocart(items))}>Add to cart</button>
                                            <button className="btn btn-primary mt-1" style={{ width: '150px' }} onClick={() => (addtosishlist(items))}>Add to wishlist</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}
            </>
    )
}

export default Page
