import src from "daisyui";
import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [item, setItem] = useState([]);
    const addProduct = (product, quantity) => {
        const actualProduct = { idProduct: product.idProduct, price: product.price, quantity: quantity,src:product.src,title:product.title,description:product.description }
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

    const totalCart = () => {
        let total = 0;
        item.forEach(actual => {
             actual.quantity>1 ? total += (actual.quantity*actual.price) : total += actual.price
        })
        return total;
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
    const getProducts = () => {

        return item;
    }

    return (<CartContext.Provider value={{ item,addProduct, getQuantity, isInCart, removeProduct,getProducts,totalCart }}>
        {children}
    </CartContext.Provider>)
}