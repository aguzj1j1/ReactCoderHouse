import React, { useState } from 'react'
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
            <div><button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold  px-4 rounded-l' disabled={amount===1} onClick={subtractProduct}>-</button></div>
            <div><p> {amount}</p></div>
            <div><button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold  px-4 rounded-l' disabled={amount===stock} onClick={addProduct}>+</button></div>
        </div>
    </div>
    </>
  )
}

export default ItemCount