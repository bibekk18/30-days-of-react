import React, { useState } from 'react'

const Contact = () => {
  const [number,setNumber]=useState(23)


  const increaseCount = ()=>{
setNumber(number+1)
  }

const decreaseCount = ()=>{

  setNumber(number-1)


  }
  return (
    <>
    
    {/* <h1>this is contact page</h1> */}
    <h1>{number}</h1>
    <button onClick={increaseCount}>+</button>
    <button onClick={decreaseCount}>-</button>
    </>
  )
}

export default Contact