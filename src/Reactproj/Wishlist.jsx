import React, { useEffect, useState } from 'react'
import Cartcomponent from './Cartcomponent'
import { useDispatch, useSelector } from 'react-redux'
import { decquantitywishlist, incquantitywishlist, removefromwishlist } from '../Redux/Wishlistreducer'


let wishitemscount = 0
export function getwishlistcount(wishlist) {
    wishitemscount = wishlist
}

function Wishlist() {

    const [wishlist, setwishlist] = useState([])
    const dispatch = useDispatch()


    const wishlistconatiner = useSelector((state) => state.Wishlist)

    const incrementwishlist = (items) => {
        dispatch(incquantitywishlist(items.productId, items.quantity))
        wishitemscount = wishlistconatiner.length + 1
    }
    const decrementwishlist = async (items) => {
        const action = dispatch(decquantitywishlist(items.productId, items.quantity))
        if (items.quantity < 2) {
            const action2 = dispatch(removefromwishlist(items.productId))
        }
        wishitemscount = wishlistconatiner.length - 1
    }

    useEffect(() => {
        setwishlist(wishlistconatiner)
    }, [wishlist,incrementwishlist,decrementwishlist])
    return (
        <Cartcomponent name="Wishlist" checkcart={wishlist} quantityinc={incrementwishlist} quantitydec={decrementwishlist}  cartitemscount={wishitemscount}/>
    )
}

export default Wishlist
