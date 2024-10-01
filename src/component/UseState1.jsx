import React, { useState } from 'react'

function UseState1() {
    const[name,Setname] =useState("ram")

    const updateData =(a) => {
        Setname(a)
    }
  return (
   <>
   <h1>Name: {name}</h1>

   <button onClick={() =>updateData("raj")}>updateName</button>
   </>
  )
}

export default UseState1