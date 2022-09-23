import { useEffect, useState } from "react"
import Item from "./Item"
import { getAllProducts } from "./firebase/FirebaseServices"
const ItemList = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getAllProducts().then((products) => {
            setItems(products)
            console.log(products)
        })
    }, [])
    return (
        <>
            <div className="flex flex-wrap">
                {items.length ? (
                    items.map((item) => <div className="mt-5"><Item key={item.id} {...item} /> </div>)
                ) : (
                    <h2>Cargando...</h2>
                )}
            </div>
        </>
    )
}

export default ItemList