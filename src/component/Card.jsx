import React from 'react'

export default function Card(props) {
  //props object return karta hai
  //console.log(props)
  return (
   <>
      <div className='card'>
        <img src={props.img} alt="" />
        <h1>Nature {props.title} Image</h1>
      </div>
   </>
  )
}

