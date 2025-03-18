import React, { useEffect, useState } from 'react'

const Effect = () => {
  const[count,setCount]=useState(0)

  useEffect(()=>{
    

console.log("hello world");

  },[])  //for 2nd type eg enter [count] in the box
  const Increasecount =()=>{
    setCount(count+1)
  }
  return (
    <div>

<h1>{count}</h1>
<button onClick={Increasecount}>+</button>

    </div>
  )
}

export default Effect