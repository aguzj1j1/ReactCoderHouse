import React, { createContext, useState } from "react";
export const PageContext = createContext();
export const PageProvider = ({ children }) => {
    const [people,setPeople] = useState(null)
    const [shipping,setShipping] = useState(null)
    const steps = [
        { title: "Tus datos" },
        { title: "Datos de envio" },
        { title: "Pagos" },
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
    return (<PageContext.Provider value={{ page, onNextPage, onBackPage, steps, getQuantitySteps,createPeople,people,createShipping,shipping }}>
        {children}
    </PageContext.Provider>)
}