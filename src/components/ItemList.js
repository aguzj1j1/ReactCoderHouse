import { useEffect, useState } from "react"
import Item from "./Item"
import json from "../data/data.json"
const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            const products = JSON.parse(JSON.stringify(json))
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    products.length > 0 ? resolve(products) : reject("no se pudo cargar los productos")
                }, 2000);
            })
        }
        getProducts().then((products) => {
            setItems(products)
            console.log(items)
        }).catch(() => {
            console.log("fallo la promesa")
        })
    }, items)
    return (
        <>
            <div className="flex flex-wrap">
                {items.length ? (
                    items.map((item) => <div><Item key={item.idProducto} {...item} /> </div>)
                ) : (
                    <h2>Cargando...</h2>
                )}
            </div>
        </>
    )
}

export default ItemList