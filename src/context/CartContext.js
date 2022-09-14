import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [item, setItem] = useState([]);
    const addProduct = (product) => {
        const actualProduct =  {idProducto:product.idProducto,price:product.price,cantidad:product.cantidad}  
        if (!isInCart(actualProduct.idProducto)){
            setItem(old => [...old,actualProduct])
        }
        
    }
    const removeProduct = (idProducto) => {
        setItem(item.filter(actual => actual.idProducto!=idProducto))
    }
    const clear = () => {
        setItem([])
    }
    const isInCart = (idProducto) => {
        return item.some(x => x.idProducto === idProducto)
    }
    const getQuantity=()=>{
        return item;
    }
    
    return (<CartContext.Provider value={{item,addProduct}}>
        {children}
    </CartContext.Provider>)
}