import React, { useRef, useState } from 'react'
import "./Todos.css"


function Todolist() {
    const input = useRef('')
    const [li, setli] = useState([])

    const formsubmit = (event) => {
        event.preventDefault()
        const i = input.current.value
        if (i.trim()==="")return
        // Appending in Usestate hook
        setli([...li, i])
        input.current.value=""
    }


    const Remele = (i) => {
        const findindex = li.findIndex((element) => element === i)
        const newArr = [...li]
        // Index value p remove krta h element
        newArr.splice(findindex, 1)
        setli(newArr)
    }
    let counter=0
    const liclick=()=>{
        counter+=1
        if(counter%2==0){
            document.getElementById("hi").classList.add('textchange')
            
        }else{
            document.getElementById("hi").classList.remove('textchange')
        }
    }

    return (
        <>
            <form onSubmit={formsubmit} >
                <label htmlFor="">Add task</label>
                <input type="text" name="" id="" ref={input} />
                <button className="btn btn-primary" type='submit' style={{ width: '100px' }} > Add</button>
            </form>
            <ul>
                {li.map((item, index) => {
                    return (
                        <li key={index} onClick={liclick} ><p  id='hi' >{item}</p>  <button className="btn btn-primary my-1" style={{ width: '100px' }} onClick={() => Remele(item)} > Remove </button></li>
                    )
                })
                }
            </ul>
        </>
    )
}

export default Todolist
