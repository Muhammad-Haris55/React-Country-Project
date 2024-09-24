
export const ThunkMiddleware=(store)=>(next)=>(action)=>{
    if(action.type==="function"){
        action()
    }
    else{
        next(action)
    }
}