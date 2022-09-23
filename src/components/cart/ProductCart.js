import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
const ProductCart = ({ src, title, description, price, stock,id, quantity }) => {
    const { removeProduct } = useContext(CartContext)
    const onDelete = () => {
        removeProduct( id)
    }
    return (
        <>
            <div className="flex justify-between items-center mt-6 pt-6">
                <div className="flex  items-center">
                    <Link to={`/product/${id}`}>
                        <img src={src} width="60" className="rounded-full " />
                    </Link>
                    <div className="flex flex-col ml-3">
                        <Link to={`/product/${id}`}>
                            <span className="md:text-md font-medium">{title}</span>
                        </Link>
                        <span className="text-xs font-light text-gray-400">{description}</span>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="pr-8 flex ">
                        <span className="text-xs font-medium">{quantity}</span>
                    </div>
                    <div className="pr-8 ">
                        <span className="text-xs font-medium">$ {price * quantity}</span>
                    </div>
                    <div>
                        <button onClick={onDelete}> <span className="text-xs font-bold" >X</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductCart