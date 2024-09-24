// import React from 'react'
// import { createStore } from 'redux'


// const initialstate = {
//     Fname: 'Haris',
//     Lname: 'Imran',
//     Depart: 'UBIT',
//     Age: 21
// }
// // In first we pass the initial state to the reducer and then we update this state in get state function

// // Action.type 
// let ageincerment = 'age/increment'
// let agedecerment = 'age/deccrement'

// function reducer(state = initialstate, action) {
//     if (action.type === ageincerment) {
//         return { ...state, Age: state.Age + action.payload }
//     }
//     if (action.type === agedecerment) {
//         return { ...state, Age: state.Age - action.payload }

//     }
//     return state
// }
// // store create krty w usy reducer pass kry g always
// // __REDUX_DEVTOOLS_EXTENSION__ for connecting with react dev tools and optional chaining cause some devices doesnt have react dev tools
// export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())
// // consoling the initial state by return 
// // console.log(store.getState())

// // reducer ko hm dispatch k thorugh call krty hai jesy hm wha manually call krrhy thy basics k file m
// // dispatch reducer ko call krta h
// // dispatch k andr action pass krty kyu k yh reducer ko call krta aur reducer ko action mendatory hai


// // Subscribe method k andr aik callback function pass krty hain jis m jb bh state change hoti hai to automatically console kr dety hai wrna hmy khud console krwana pry ga manually ,aur is subscribe method ko dispatch k upr rkhty hain,also known as action dipatcher
// store.subscribe(() => {
//     // console.log(store.getState())
// })


// store.dispatch({ type: ageincerment, payload: 15 })
// store.dispatch({ type: agedecerment, payload: 15 })

// function Redux() {
//     return (
//         <>
//             <h2>Redux Started</h2>

//         </>
//     )
// }
// export default Redux

