import React, { useState } from 'react'
import { Button } from 'react-daisyui'
const ItemCount = ({stock}) => {
    const [amount, setAmount] = useState(1);
    const addProduct= ()=>{
            setAmount(amount+1)
    }
    const subtractProduct= ()=>{
            setAmount(amount-1)
    }
  return (
    <>
    <div className='content-center'>
        <div className='flex flex-row'>
            <div><Button disabled={amount===1} onClick={subtractProduct}>-</Button></div>
            <div><p> {amount}</p></div>
            <div><Button disabled={amount===stock} onClick={addProduct}>+</Button></div>
        </div>
    </div>
    </>
  )
}

export default ItemCount