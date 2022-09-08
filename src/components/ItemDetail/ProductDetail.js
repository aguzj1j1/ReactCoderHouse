import React from 'react'
import './ItemDetail.css'
const ProductDetail = ({details}) => {
    
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