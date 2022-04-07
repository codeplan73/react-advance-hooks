import {useRef, useEffect, useState } from 'react'

const UseRefExample2 = () => {
    const render = useRef(1)
    const [name, setName] = useState('')
    const prevName = useRef('')

    useEffect(() => {
        render.current = render.current +1
        prevName.current = name
    }, [name])
  return (
    <div>
        <h1>{render.current}</h1>
        <h2>Prev Name: {prevName.current}</h2>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control mb-3" id="" />
    </div>
  )
}

export default UseRefExample2