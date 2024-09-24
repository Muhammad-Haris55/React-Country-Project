// import React from 'react'
// import { combineReducers } from 'redux'

// import Productreducer from './Productreducer'
// import Wishlistreducer from './Wishlistreducer'
// // import {Cartreducer} from './Cartreducer'

// // import { produce } from 'immer'
// import Cartreducer, { slice } from './Cartreducer'
// // import { logger } from './Middleware/Logger'
// import { configureStore } from '@reduxjs/toolkit'
// // import { ApiMidlleWare } from './Middleware/ApiMidlleware'
// import { ThunkMiddleware } from './Middleware/ThunkMiddleware'
// // import { additem, Additem, QuantityDecrease, Quantitydecrease, quantityincrease, Quantityincrease, removeitem, Removeitem } from './Cartreducer'
// // import { Addtowishlist, DeccreaseQuantitywishlist, IncreaseQuantitywishlist, Removefromwishlist } from './Wishlistreducer'





// // Reducer updates the states
// // const reducer = combineReducers({
// //     Product: Productreducer,
// //     Cart: Cartreducer,
// //     Wishlist: Wishlistreducer,
// // })
// // function logger(store) {
// //     return function (next) {
// //         return function (action) {
// //             console.log("Store", store)
// //             console.log("next", next)
// //             console.log("action", action)
// //             next(action)
// //         }
// //     }
// // }

// // Middlewares:Middleware action dispatch hony k bd aur reducer tk phonchny s pehly act krta h is m basically curriny funcions(Series of functions) hoty h basically api handling and fetching data ma use hota hai

// // By default middleware actions ko rok deta hai aur agy action send nhi krta agr agy action perform krwana h to hmy next function m action as a parameter bhjna prta h middleware function m

// export const store = configureStore({
//     reducer: {
//         Product: Productreducer,
//         Cart: Cartreducer,
//         Wishlist: Wishlistreducer
//     },
//     // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ApiMidlleWare],
//     // middleware:(middleware)=>[...middleware(),ThunkMiddleware]
// })

// // Priniting the state every time the state gets updated
// store.subscribe(() => {
//     // console.log(store.getState())
// })


// // Functional Nonfunction topics 


// // const user=[
// //     {
// //         Name:"Harris",
// //         Age:21
// //     },
// //     {
// //         Name:"Abdullah",
// //         Age:22
// //     }
// // ]

// // Non Functional Programming:Hm data ko directly manipulate krty hai for eg agr aik obj hai us m data ha aur hm directly modify kry us obj ko like this
// // user[1].Age=25
// // console.log(user)

// // Functional Programming:Hm data ko directly manipulate nhi krty blky us k copy bna k new obj m modification krty hain like
// // const modifieduser=user.map((user,index)=>{
// //     if(index===1){
// //         return{...user,Age:25}
// //     }
// //     return user
// // })
// // console.log(modifieduser)

// //  Immer Js
// // Now what is immer js see the steps foolowed in functional programming are lengthier so immer js provide a produce function in which we mutate the obj in a direct manner like nonfucntional prog but immer produce function creates a copy and then it does operations on it
// // const modifieduser=produce(user,(usercopy)=>{
// //     // usercopy is basically copy of the real user obj
// //     usercopy[1].Age=25
// // })
// // console.log(modifieduser)



// //Adding
// // store.dispatch(additem(1,1))
// // store.dispatch(additem(10,1))
// // store.dispatch(additem(12,1))
// // store.dispatch(additem(11,1))
// // store.dispatch(additem(9,1))
// // store.dispatch(additem(13,1))

// // Removing
// // store.dispatch(removeitem(13))
// // store.dispatch(removeitem(10))


// // Quantity Increase
// // store.dispatch(quantityincrease(11,12))
// // store.dispatch(quantityincrease(9,15))



// // Quantity decrease
// // store.dispatch(QuantityDecrease(9,3))
// // store.dispatch(QuantityDecrease(11,3))


// // Add to wishlist
// // store.dispatch({ type: Addtowishlist, payload: { productId: 9, quantity: 3 } })
// // store.dispatch({ type: Addtowishlist, payload: { productId: 10, quantity: 15 } })
// // store.dispatch({ type: Addtowishlist, payload: { productId: 2, quantity: 3 } })
// // store.dispatch({ type: Addtowishlist, payload: { productId: 15, quantity: 15 } })


// // Removefromwishlist
// // store.dispatch({ type: Removefromwishlist, payload: { productId: 9, quantity: 3 } })
// // store.dispatch({ type: Removefromwishlist, payload: { productId: 2, quantity: 3 } })


// //IncreaseQuantityishlist

// // store.dispatch({ type: IncreaseQuantitywishlist, payload: { productId: 15, quantity: 12 } })
// // store.dispatch({ type: IncreaseQuantitywishlist, payload: { productId: 10, quantity: 2 } })

// // Decreasequantitywishlist
// // store.dispatch({ type: DeccreaseQuantitywishlist, payload: { productId: 10, quantity: 10 } })
// // store.dispatch({ type: DeccreaseQuantitywishlist, payload: { productId: 15, quantity: 2 } })

// function Statemanagement() {

//     return (
//         <>
//             <h3>React Complex state management</h3>
//             <h6>Implementing on Ecommerce</h6>
//         </>
//     )
// }

// export default Statemanagement
