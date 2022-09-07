import React from 'react'
import './ItemDetail.css'
const ProductDetail = () => {
    let details = ["prueba1","prueba2","prueba3"]
    let i = 0
    const listItems = details.map((detail,index)=>

    <li key={index} className='li_detail__Product'>  {detail} </li>
  );
  return (
    <>
    <ul>
        {listItems }
    </ul>
    </>
  )
}

export default ProductDetail