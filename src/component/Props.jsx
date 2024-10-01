import React from 'react'

function Props(props) {
    console.log(props.name)

  return (
   <>
   <h1>Props {props.name}</h1>
   </>
  )
}

export default Props