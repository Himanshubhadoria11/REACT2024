import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [data, setdata] = useState(100);

    const pn = () => {
       
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))  
    }


    useEffect(()=>{
        pn()
        console.log("useEffect")
    },[])

  return (
  <>
     <p>You clicked {count} times</p>
     <p>You data {data} times</p>
     <button onClick={() => setCount(count+1)}>
        Click me
     </button>
     <button onClick={() => setdata(data+1)}>
        Click data
     </button>

  </>
  )
}

export default UseEffect