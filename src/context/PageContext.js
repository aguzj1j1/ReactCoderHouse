import React, { createContext, useState } from "react";
export const PageContext = createContext();
export const PageProvider = ({ children }) => {
    const [people,setPeople] = useState(null)
    const [shipping,setShipping] = useState(null)
    const [idOrder,setIdOrder] = useState("")
    const [soldOut,setSoldOut] = useState(false)
    const steps = [
        { id:1,title: "Tus datos" },
        { id:2,title: "Datos de envio" },
        { id:3,title: "Pagos" },
    ];
    const [page, setPage] = useState(0)
    const onNextPage = () => {
        setPage(page + 1)
    }
    const onBackPage = () => {
        setPage(page - 1)
    }
    const getQuantitySteps = () => {
        return steps.length;
    }
    const createPeople = (actualPeople) => {
        setPeople(actualPeople)
    }
    const createShipping = (actualShipping) => {
        setShipping(actualShipping)
    }
    const sold = () => {
        setSoldOut(true);
        console.log(soldOut)
    }
    return (<PageContext.Provider value={{ page, onNextPage, onBackPage, steps, getQuantitySteps,createPeople,people,createShipping,shipping,soldOut,sold }}>
        {children}
    </PageContext.Provider>)
}