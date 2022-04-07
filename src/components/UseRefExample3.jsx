import {useState} from 'react'
import Todo from './Todo'

const UseRefExample3 = () => {
    const [showTodo, setShowTodo] = useState(true)
    const handleClick = () => {
        setShowTodo(!showTodo)
    }
  return (
    <div>
        {showTodo && <Todo/>}
        <button className="btn btn-primary" onClick={handleClick}>Toggle Todo</button>
    </div>
  )
}

export default UseRefExample3