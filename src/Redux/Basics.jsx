// import React, { useState } from 'react'

// import { createStore } from 'redux'

// function Basics() {
//     let state = {
//         count: 1
//     }

//     // Mutatating(Direct change)
//     // console.log(state.count+1)

//     // Immutating(Creating a function to change an object)
//     const changestate = () => {
//         state = {
//             count: state.count + 2
//         }
//         return state
//     }

//     // console.log(changestate())
//     // console.log(changestate())
//     // console.log(changestate())

//     const [states, setstates] = useState({ count: 0, Topic: "Redux", Day: "Monday", Date: "29-July" })
//     const add = () => {
//         // Spreading s purany cheezy mery save rhy aur jo update hoga wo just show hoga
//         setstates((prevstate) => ({ ...prevstate, count: states.count + 1 }))
//     }
//     const sub = () => {
//         // Spreading s purany cheezy mery save rhy aur jo update hoga wo just show hoga
//         setstates((prevstate) => ({ ...prevstate, count: states.count - 1 }))
//     }



//     // real redux starts from here

// // Yeh ab hamary initial state kehlaty hai redux ma
//     const initialstate = {
//         Fname: "Harris",
//         Lname: "Imran",
//         Uni: "nill",
//         Age: 0,
//     }
//     let reduxstate2 = {
//         Fname: "Harris2",
//         Lname: "Imran2",
//         Uni: "nill2",
//         Age: 2,
//     }

//     // Is ka directly reducer m mainobj s koi taluq nhi hoga

//     // Reducer basically aik updater hota hai jo react k ksi bh specified obj ko update krty without mutating it means us s directly interact kiye bagary update krta hai.
//     function reducer(state=initialstate, action) {
//         // There is a differnce btw when updating a number and string
//         // console.log(action)    
//         if (action.type === "age/increment") {
//             return { ...state, Age: state.Age + 21, Lname: "Harris2", Uni: 'KU' }
//         }
//         else if (action.type === "age/decrement") {
//             return { ...state, Age: state.Age - 10, Lname: "Harris2", Uni: 'KU' }
//         }
//         else {
//             // console.log("Action not defined")
//             return { ...state, Age: state.Age +0, Lname: "Harris2",Uni:'KU'}
//         }

//     }
//     const store=createStore(reducer)
//     console.log(store.getState())

//     // 1 an action should have a type with that it can also have a paylod,action is bascially an object contains type which defines what action has to be performed
//     // Jis ko update kry g us ko as variable call kr k reducer function pass kry g
//     // reduxstate = reducer(reduxstate, { type: "age/increment" })
//     // console.log(reduxstate)
//     // reduxstate = reducer(reduxstate, { type: "age/decrement" })
//     // console.log(reduxstate)
//     // 2


//     // function reducer2(state) {
//     //     // There is a differnce btw when updating a number and string
//     //     return { ...state, Fname: 'H3', Lname: "I3", Age: state.Age + 2 }
//     // }
//     // reduxstate2 = reducer2(reduxstate2)


//     // THis is simple Js of how reducer works!!
//     let newobj = {
//         name: 'Haris',
//         Class: 'Uni',
//         Height: '6ft',
//         Age: 21,
//     }

//     const newreducer = (state, action) => {
//         // Only if will work untill we comment out that
//         if (action.type === state.Height) {
//             return { ...state, Age: state.Age + action.payload }
//         }
//         else if (action.Class == state.Class) {
//             return { ...state, Age: state.Age - action.payload2 }
//         }
//     }

//     newobj = newreducer(newobj, { type: "6ft", Class: "Uni", payload: 20, payload2: 10 })
//     // console.log(newobj)
//     // const store =createStore(newreducer)
//     // console.log(store)


//     // console.log(reduxstate2)


//     // Now installing redux at this point
//     return (
//         <>
//             <h5>Redux Management</h5>
//             {/* <h2>Count value:{states.count}</h2> */}
//             {/* <button onClick={add}>Increment</button> */}
//             {/* <button onClick={sub}>Decrement</button> */}
//             {/* <h4>Topic:{states.Topic}</h4> */}
//             {/* <h4>Day:{states.Day}</h4> */}
//             {/* <h4>Time:{states.Date}</h4> */}
//             {/* <h5>Class:{newobj.Class}</h5> */}
//             {/* <h5>Height:{newobj.Height}</h5> */}
//         </>
//     )
// }

// export default Basics
