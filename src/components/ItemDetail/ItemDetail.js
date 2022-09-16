import React, { useState, useEffect, useContext } from 'react'
import './ItemDetail.css'
import { Carousel } from '../Images/Carousel';
import { ImageList } from '../Images/ImageList';
import Stars from './Stars';
import ProductDetail from './ProductDetail';
import json from "../../data/data.json"
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../ItemCount';
import { CartContext } from '../../context/CartContext';
const ItemDetail = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [loadingImages, setLoadingImages] = useState(false);
  const [counter, setCounter] = useState(1)
  const [product, setProduct] = useState();
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { idProduct } = useParams();
  const { addProduct, isInCart, removeProduct } = useContext(CartContext)
  useEffect(() => {
    getProductById().then((products) => {
      let actualProduct = products.filter(product => product.idProduct == idProduct)[0];
      setProduct(actualProduct)
      fetchPhotos(1, actualProduct.src, actualProduct.src)
    }).catch(() => {
      console.log("fallo la promesa")
    })

  }, []);

  const getProductById = () => {
    const products = JSON.parse(JSON.stringify(json))
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        products.length > 0 ? resolve(products) : reject("no se pudo cargar los productos")
      }, 2000);
    })
  }

  const onAdd = (quantity) => {
    setCounter(quantity);
    addProduct(product, quantity)
  }

  const remove = () => {
    removeProduct(product.idProduct)
  }

  async function fetchPhotos(currentPage, images, nextImages) {
    try {
      setLoadingImages(true);

      setImages([...images, ...nextImages]);
      setCurrentPage(currentPage + 1);
      setTotalPages(10);

      setLoadingImages(false);
      setInitialLoad(false);
    } catch (e) {
      setLoadingImages(false);
      setInitialLoad(false);
    }
  }

  if (initialLoad) {
    return null;
  }
  return (
    <>
      <div className="flex Buy__Box mt-10" >

        <div className="flex-none w-32 h-14">
          <ImageList
            images={images}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onScrollEnd={() => {
              if (!loadingImages && currentPage !== totalPages) {
                fetchPhotos(currentPage + 1);
              }
            }}
          />
        </div>

        <div className="flex-initial w-96 ">
          <Carousel
            images={images}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className="mt-40">
          <div className="flex flex-col">
            <span>Nuevo | 108 vendidos</span>
            <div className="title__container">
              <h2 className='title__product'> {product.title}</h2>
            </div>
            <div>
              <Stars />
            </div>
            <div className='mt-5 flex flex-row'>
              <div className='recommended-bg-black'><span className='recommended-Text'> RECOMENDADO </span></div>
              <div className='mr-5'><span className=''> en los {product.tipoProducto}</span></div>
            </div>
            <div>
              <span className='price__font'><b>${product.price}</b></span>
            </div>
            <div className='infoProducto'>
              <h2 className='info__product'>Lo que tenés que saber de este producto</h2>
            </div>
            <div>
              <ProductDetail details={product.infoProducto} />
            </div>
          </div>
        </div>
        <div className='mt-40 ml-10'>
          <div className='Buy__Box'>
            <div className="flex flex-col informacionEnvio">
              <div>
                <p className='envio__detalle'>Llega gratis <b>mañana!</b></p>
              </div>
              <div>
                <p className='stock__disponible'>Stock disponible</p>
              </div>
              <div className='flex flex-row' style={{ display: isInCart(product.idProduct) ? 'none' : 'block' }}>
                <div>
                  <p className='quantity__parraf'>Cantidad: </p>
                </div>
                <div>
                  <ItemCount key={product.idProduct} stock={product.stock} onAdd={onAdd}></ItemCount>
                </div>
                <div>
                  <span> {product.stock} disponibles</span>
                </div>
              </div>
              <div className='flex flex-row' style={{ display: isInCart(product.idProduct) ? 'block' : 'none' }}>
                <div>
                  <Link to="/cart">
                    <button className='button__buy' > <span className='button__content'> Ir al carrito </span></button>
                  </Link>
                </div>
                <div>
                  <button className='button__buy' onClick={remove}> <span className='button__content'>Eliminar del carrito </span></button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default ItemDetail