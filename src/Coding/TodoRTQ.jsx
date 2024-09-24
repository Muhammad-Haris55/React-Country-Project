import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
// import { useGetTodosQuery } from './RTQApislice'



function TodoRTQ() {
    const [Task, Settask] = useState([])
    const [checks, setcheck] = useState(true)
    const gettask = useRef('')
    const [counter, setCounter] = useState(6)
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    // useGetTodosQuery()
    useEffect(() => {
        async function getapidata() {
            try {
                const { data } = await axios.get("https://dummyjson.com/todos?limit=5")
                setLoading(false)
                Settask(data.todos)
            }
            catch (e) {
                setLoading(false)
                setError(true)
            }

        }
        getapidata()
    }, [])

    const Addtask = () => {
        const updatedtask = {
            "todo": gettask.current.value,
            "completed": false,
            "userId": counter
        }
        setCounter(counter + 1)
        
        async function getapidata() {
            try {
                const resp = await axios.post('https://dummyjson.com/todos/add', updatedtask, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            }
            catch (e) {

                console.log(e)
            }

        }
        getapidata()
        Settask([...Task, updatedtask])
    }
    const Removetask = (task) => {
        let updatedarr = Task.filter((index) => index !== task)
        Settask(updatedarr)
    }
    const Update = async (task) => {
        setcheck((prev) => !prev)
        const stask = Task.find((element) => element.id === task.id)
        if (checks == true) {
            stask.completed = true
        }
        else {
            stask.completed = false
        }
    }
    return (
        <>
            <h1>Todos List</h1>
            <input type="text" name="" ref={gettask} id="" />
            <button onClick={Addtask}>Add Task</button>
            <ul>
                {
                    isLoading == true ? <h5>Loading</h5> : isError ? <h5>Something went wrong</h5> :
                        Task.map((task) => {
                            return <li><input type="checkbox" checked={task.completed} placeholder='' id="check" onClick={() => Update(task)} /> <span style={{ textDecoration: task.completed == true ? "line-through" : "none" }} className="span">{task.todo}</span>  <button onClick={() => Removetask(task)}>Remove</button></li>
                        })
                }
            </ul>
        </>
    )
}

export default TodoRTQ
