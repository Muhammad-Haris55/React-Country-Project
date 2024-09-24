export const ThunkMiddleware2=(store)=>(next)=>(action)=>{
    const {dispatch}=store
    if(action.type==="function"){
        action(dispatch)
    }else{
        next(action)
    }
}