import React, { useState } from 'react'
// import UpdateData from './component/UpdateData'
import UseState from './component/UseState'
import UseState1 from './component/UseState1'
import UseState2 from './component/UseState2'
import Props from './component/Props'
import HideShowandToggle from './component/HideShowandToggle'
import Props1 from './component/Props1'
import CSSStyling from './component/CSSStyling'
import CardComponent from './component/CardComponent'
import ConditionalRendering from './component/ConditionalRendering'
import Images from './component/Images'
import UseState11 from './component/Hooks/UseState11'
import UseEffect from './component/Hooks/UseEffect'
import UseEffect1 from './component/Hooks/UseEffect1'






function App() {
let data = "ravi"
const [count, setCount] =useState(0)
  // const [name,Setname] =useState("pninfosys")
  return (
    <>
     {/* <UpdateData/> */}
    {/* <UseState/> */}
    {/* <UseState1/> */}
    {/* <UseState2/> */}
    {/* <Props name={name}/> */}
    {/* <HideShowandToggle/> */}
    {/* <Props1 d={data} c={count}/>
    <button onClick={()=>setCount(count+1)}>update count</button> */}
    {/* <CSSStyling/> */}
     {/* <CardComponent/> */}
    {/* <ConditionalRendering/> */}
    {/* <Images/> */}
    {/* <UseState11/> */}
    {/* <UseEffect/> */}
    <UseEffect1/>
    
    </>
  )
}

export default App
