import React from 'react'
import img from '../image/img.jpg'

function Images() {
  return (
   <>
       <img src={img} alt="" style={{width:"500"}} />
       <img src="../image/img.jpg" alt="hello" />
   
   </>
  )
}

export default Images