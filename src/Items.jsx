import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from './Context/Apicontext'
import axios from 'axios'


import './Items.css'

function Items() {
    const [items, setitems] = useState([])
    const CartContext = useContext(Cartcontext)
    useEffect(() => {
        const getapidata = async () => {
            try {
                const { data } = await axios.get('https://dummyjson.com/products')
                setitems(data.products)
            } catch (e) {
                console.log(e.message)
            }
        }
        getapidata()
    }, [])

    const Addtocart = (item) => {
        // Destructuring the object passed from the mapped function
        const {imageUrl,title,price}=item

        // Appending with the current cart items
        CartContext.update([...CartContext.show, { imageUrl, title, price }])

        // Creating & Rounding the total cost
        let roundfigure = Number.parseFloat((CartContext.total + price).toFixed(2))
        CartContext.settotal(roundfigure)
    }


    const Removefromcart = (item) => {
        const { title, price } = item;
        // Finding index of the element in the object
        const itemindex = CartContext.show.findIndex((cartitem) => cartitem.title === title)

        // If element then create a new cart and remove tha specifed indexed element from the cart and update the cart
        if (itemindex !== -1) {
            const newcart = [...CartContext.show]
            newcart.splice(itemindex, 1)
            CartContext.update(newcart)

            // Updating the total bill
            const newTotal = Number.parseFloat((CartContext.total - price).toFixed(2))
            
            // Total price should not be in negtive number
            if (newTotal < 0) {
                CartContext.settotal(0)
            }
            else {
                CartContext.settotal(newTotal)
            }
        }


    };


    return (
        <>
            <h5>Current Total:{CartContext.total}</h5>
            <div class="cardholder mt-3">
                {
                    items.map((item, index) => {
                        return (
                            <div className="card" key={index} >
                                <img src={item.images} />
                                <div className="bottom">
                                    <h4 className='title'>Title {item.title}</h4>
                                    <h6 className='price' id="price">Price  ${item.price}</h6>
                                    <button type="button" class="btn btn-primary" onClick={() => Addtocart(item)}>Add to cart</button>
                                    <button type="button" class="btn btn-primary my-1" onClick={() => Removefromcart(item)}>Remove</button>
                                </div>
                            </div>


                        )
                    })
                }
            </div>

        </>
    )
}

export default Items
