import { useEffect, useState } from "react"
import Item from "./Item"
import { getAllProducts, getProductByCategory } from "../firebase/FirebaseServices"
const ItemList = ({ categorys = null }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (categorys == null) {
            getAllProducts().then((products) => {
                setItems(products)
            })
        } else {
            getProductByCategory(categorys).then((products) => {
                setItems(products)
            })
        }
    }, [items])
    return (
        <>
            <div className="flex justify-center"> {categorys == null ? <p class="italic ...">TODOS LOS PRODUCTOS </p> : <p class="italic ...">{categorys}</p>}
            </div>
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