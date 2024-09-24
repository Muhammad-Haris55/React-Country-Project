import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { GetCartData } from '../Redux/Cartreducer'


function Cartcomponent({ quantityinc, quantitydec, cartitemscount, name }) {


    const CartItems = useSelector(GetCartData)

    const increment = (items) => {
        quantityinc(items)
    }

    const decrement = (items) => {
        quantitydec(items)
    }
    const navigate = useNavigate()


    return (
        <>
            <div className='header'>
                <h4 className='mt-2' onClick={() => (navigate("/"))}>SHOPEEEE</h4>
                <span>
                    <p className='mt-3'>{cartitemscount}</p>
                    <img src="./cart.png" alt="" id='cart' />
                </span>

            </div>
            <div className="cartholder mt-5 pt-2" >
                <h4 className='text-center mt-2'>Your {name}</h4>
                {

                    CartItems.map((items, index) => {
                        return (
                            <div className='cartitems' key={index} >
                                <div className='items'>
                                    <h5>Product</h5>
                                    <img src={items.image} alt="" />
                                </div>
                                <div className='items'>
                                    <h5>Item</h5>
                                    <h6>{items.title}</h6>
                                </div>
                                <div className='items'>
                                    <h5>Price</h5>
                                    <h6>${items.price}</h6>
                                </div>
                                <div className='items'>
                                    <h5>Quantity</h5>
                                    <h6 className='quantity'>
                                        <button onClick={() => increment(items)}>+</button>
                                        <p>{items.quantity}</p>
                                        <button onClick={() => decrement(items)}>-</button>
                                    </h6>
                                </div>
                                <div className='items'>
                                    <h5>Total</h5>
                                    <h6>
                                        <p>${items.quantity * items.price}</p>
                                    </h6>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Cartcomponent
