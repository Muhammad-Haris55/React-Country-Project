import { createSelector, createSlice } from "@reduxjs/toolkit"
import { current, produce } from "immer"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { store } from "./Statemanagement"

// Action Types
// export const Additem = 'Cart/additem'
// export const Removeitem = 'Cart/removeitem'
// export const Quantityincrease = 'Cart/quantity_increase'
// export const Quantitydecrease = 'Cart/quantity_decrease'


// Action Creators
// export function additem(productId, quantity, title, imgurl, price) {
//     return { type: Additem, payload: { productId: productId, quantity: quantity, title: title, image: imgurl, price: price } }
// }

// export function removeitem(productId) {
//     return { type: Removeitem, payload: { productId: productId } }
// }

// export function quantityincrease(productId, quantity) {
//     return { type: Quantityincrease, payload: { productId: productId, quantity: quantity } }
// }
// export function QuantityDecrease(productId, quantity) {
//     return { type: Quantitydecrease, payload: { productId: productId, quantity: quantity } }
// }

// export function Cartreducer(originalstate = [], action) {
//     // Actions what to perform

//     return produce(originalstate, (state) => {
//         const existingitemindex = state.findIndex((item) => {
//             // console.log
//             return item.productId === action.payload.productId
//         })

//         switch (action.type) {
//             case Additem:
//                 if (existingitemindex !== -1) {
//                     return state[existingitemindex].quantity + 1
//                 }
//                 state.push({ ...action.payload })
//                 break
//             // const existingitem = state.find((item) => (
//             //     item.productId === action.payload.productId
//             // ))
//             // if (existingitem) {
//             //     return state.map((cartitem) => {
//             //         if (cartitem.productId === action.payload.productId) {
//             //             return { ...cartitem, quantity: cartitem.quantity + 1 }
//             //         }
//             //         return cartitem
//             //     })
//             // }
//             // return [...state, action.payload]
//             case Removeitem:
//                 state.splice(existingitemindex, 1)
//                 break
//             // Filter method aik new array return krta h jis m true/false k base p judge krta h jo cod tru hoti usy include krta baki jo false hoti usy exclude krdeta hai 
//             // return state.filter((Cartitem) => Cartitem.productId !== action.payload.productId)


//             case Quantityincrease:
//                 state[existingitemindex].quantity += 1
//                 break
//             // return state.map((items) => {
//             //     if (items.productId === action.payload.productId) {
//             //         return ({ ...items, quantity: items.quantity + 1 })
//             //     }
//             //     return items
//             // })

//             case Quantitydecrease:
//                 state[existingitemindex].quantity -= 1
//                 break
//             // return state.map((elements) => {
//             //     if (elements.productId === action.payload.productId) {
//             //         return { ...elements, quantity: elements.quantity - 1 }
//             //     }
//             //     return elements
//             // })

//         }
//         return state

//     })

// }

// Now seeing Slice fucntion which is provided by redux toolkit benefit is that it creats automatically the action types action creators and reducer function which makes the code shorter and more manageable

const finditemindex = (state, action) => (state.findIndex((item) => {
    return item.id === action.payload.id
}))

// export const index=[]
const slice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        additem(state, action) {
            const existingitemindex = finditemindex(state, action)
            if (existingitemindex != -1) {
                state[existingitemindex].quantity += 1
            }
            else {
                state.push({ ...action.payload })
            }
        },
        removeitem(state, action) {
            const existingitemindex = finditemindex(state, action)
            state.splice(existingitemindex, 1)
        },
        QuantityDecrease(state, action) {
            const existingitemindex = finditemindex(state, action)
            state[existingitemindex].quantity -= 1
        },
        quantityincrease(state, action) {
            const existingitemindex = finditemindex(state, action)
            state[existingitemindex].quantity += 1
        },

        // Function for calculating total
        // calculateprice(state, action) {
        //     const existingitemindex = finditemindex(state, action)
        // let total = state.reduce((acc, current) => acc + (state[existingitemindex].price * state[existingitemindex].quantity), 0)
        // }


    }
})
// Memoization for Selector error to stop re render the component if the object is not changed
export const getCartProducets = ({ Product, Cart }) => (
    Cart.map(({ id, productId, quantity }) => {
        const CartProduct = Product.list.find((item) => item.id === id)
        return { ...CartProduct, quantity }
    })
)
export const GetCartData = createSelector(getCartProducets, (state) => state)
// export const GetCartData =createSelector(getCartProducets,[state => state.getCartProducets], getCartProducets => getCartProducets)
export const {
    additem,
    removeitem,
    QuantityDecrease,
    quantityincrease,
    calculateprice,
    addmultipleitems
} = slice.actions
export default slice.reducer