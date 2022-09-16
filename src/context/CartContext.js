import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [item, setItem] = useState([]);
    const addProduct = (product, quantity) => {
        const actualProduct = { idProduct: product.idProduct, price: product.price, quantity: quantity }
        if (!isInCart(actualProduct.idProduct)) {
            setItem(old => [...old, actualProduct])
        } else {
            let aux = item;
            aux[aux.findIndex(actual => actual.idProduct === actualProduct.idProduct)]["quantity"] = quantity
            setItem([...aux])
        }

    }
    const removeProduct = (idProduct) => {
        setItem(item.filter(actual => actual.idProduct !== idProduct))
    }
    const clear = () => {
        setItem([])
    }
    const isInCart = (idProduct) => {
        return item.some(x => x.idProduct === idProduct)
    }
    const getQuantity = () => {
        let quantity = 0;
        item.forEach(actual => {
            quantity += actual.quantity
        })
        return quantity;
    }

    return (<CartContext.Provider value={{ item, addProduct, getQuantity,isInCart,removeProduct}}>
        {children}
    </CartContext.Provider>)
}