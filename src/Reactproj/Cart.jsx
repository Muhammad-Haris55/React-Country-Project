import React, { useEffect, useState } from 'react'
import "../Reactproj/Main.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { QuantityDecrease, quantityincrease, removeitem } from '../Redux/Cartreducer'
import Cartcomponent from './Cartcomponent'

let cartitemscount = 0
export function getcount(count) {
    cartitemscount = count
}

function Cart() {
    // useSelector(console.log)
    const dispatch = useDispatch()
    const quantityinc = (items) => {
        let { id } = items
        dispatch(quantityincrease({ id }))
    }

    const quantitydec = async (items) => {
        console.log(items)
        let { id } = items
        const action = dispatch(QuantityDecrease({ id }))
        if (items.quantity < 2) {
            const action2 = dispatch(removeitem({ id }))
        }
       }

    return (
        <>
            <Cartcomponent name="Cart" quantityinc={quantityinc} quantitydec={quantitydec} cartitemscount={cartitemscount} />
        </>
    )
}

export default Cart
