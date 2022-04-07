import {useState, useEffect, useRef, useMemo } from 'react'

const UseMemoExpample = () => {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  const render = useRef(1)

  const sqrt = useMemo(() => getSqrt(number), [number])

  useEffect(() => {
    render.current = render.current + 1
  }, [])

  const onClick =()=> {
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1
    })
  }


  return (
    <div>
      <h2 className='my-3'>The square root of a {number} is {sqrt}</h2>

      <input type="number" className='form-control w-25' value={number} onChange={(e) => setNumber(e.target.value)} id="" />
      <button onClick={onClick} className='btn btn-info'>ReRender</button>
      <h4>ReRender {inc}</h4>
    </div>
  )
}

function getSqrt(n){

  for (let i=0; i <=1000; i++){
    console.log(i)
  }


  console.log('Expensive Function Called')
  return Math.sqrt(n)
}

export default UseMemoExpample