import { collection, getDocs, getFirestore, query, where, documentId, addDoc } from "firebase/firestore";



export const getAllProducts = () => {
    let products;
    const db = getFirestore()
    const productsCollection = collection(db, "products");

    return getDocs(productsCollection).then((snapshot) => {
        products = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        return products
    })

}

export const getProductById = (id) => {
    let products;
    const db = getFirestore()
    const productQuery = query(collection(db, "products"), where(documentId(), "==", id));
    return getDocs(productQuery).then((snapshot) => {
        products = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        return [...products]
    })
}
export const getProductByCategory = (category) => {
    let products;
    const db = getFirestore()
    const productQuery = query(collection(db, "products"), where("categoria", "==", category));
    return getDocs(productQuery).then((snapshot) => {
        products = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        return products
    })
}

export const postOrder = (order) => {
    console.log(order)
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order).then((id) => {
       return id;
    })
  

}