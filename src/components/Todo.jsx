import {useState, useEffect, useRef } from 'react'

const Todo = () => {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})

    const isMounted = useRef(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
               if(isMounted.current){
                setTodo(data)
                setLoading(false)
               }
            }, 300)
        })

        return () => {
            isMounted.current = false
        }
    }, [isMounted])
  return loading ? <h3>Loading...</h3> : <h1 key={todo.id}>{todo.title}</h1>
}

export default Todo