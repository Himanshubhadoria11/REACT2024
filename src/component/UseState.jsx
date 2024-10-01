import React, { useState } from 'react'

function UseState() {
    const [data ,SetData] =useState("pninfosys")
    const updateData = () => {
          SetData("ram")
      }
      console.log("component render")
  return (
    <>
    <h1>{data}</h1>
    <button onClick={updateData}>update data</button>

    </>
  )
}

export default UseState