import React, { useState } from 'react'

function UseState2() {
    const [count, SetCount] = useState(100)
    const [data, setData] =useState({
        name: "ram",
        city: "gwalior",
        phone: 123456
    })

    console.log("render")
  return (
    <>
    <h1>Name: {count}</h1>
    <h2>Name:{data.name} city:{data.city} phone:{data.phone}</h2>
    <button onClick={() =>SetCount(count+1)}>updateName</button>
    </>
  )
}

export default UseState2