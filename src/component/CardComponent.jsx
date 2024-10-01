import React from 'react'
import Card from './Card'
import './card.css'
import img from '../image/img.jpg'

function CardComponent() {
  return (
    <>
     <h1 className='heading'>Card jewellry</h1>
       <div className='cardComp'>
           <Card title="1" img={img}/>
          </div>
    </>
  )
}

export default CardComponent