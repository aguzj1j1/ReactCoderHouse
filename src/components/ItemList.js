import { useEffect, useState } from "react"
import Item from "./Item"

const ItemList = () => {
    const [items, setItems] = useState([]);
    const getProducts = async () => {
        debugger;
         fetch('../data/data.json')
                .then(response => response.json())
                .then((data) => {
                    debugger;
                    return data;
                });
        return new Promise(async (resolve, reject) => {
            

        })
    }
    useEffect(() => {
       
        getProducts()
    })
    return (
        <Item></Item>
    )
}

export default ItemList