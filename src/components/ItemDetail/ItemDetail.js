import React, { useState, useEffect } from 'react'
import './ItemDetail.css'
import { createApi } from "unsplash-js";
import { Carousel } from '../Images/Carousel';
import { ImageList } from '../Images/ImageList';
import Stars from './Stars';
import ProductDetail from './ProductDetail';
const browserApi = createApi({
  accessKey: "SiT0pCar0JOCdB6NeJ-BuEdiAaxVhSUIpdPnMozS1-E"
});
const ItemDetail = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [loadingImages, setLoadingImages] = useState(false);

  // last page that was loaded
  const [currentPage, setCurrentPage] = useState(null);
  // total amount of pages that can be loaded
  const [totalPages, setTotalPages] = useState(null);

  //all the images that have currently been loaded / fetched
  const [images, setImages] = useState([]);
  // shows which image is currently selected and fullsize
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchPhotos(1);
  }, []);

  async function fetchPhotos(currentPage) {
    try {
      setLoadingImages(true);

      const {
        response: { total_pages, results }
      } = await browserApi.search.getPhotos({
        query: "nature",
        page: currentPage,
        perPage: 25
      });

      const nextImages = results.map(res => {
        return res.urls.regular;
      });

      setImages([...images, ...nextImages]);
      setCurrentPage(currentPage + 1);
      setTotalPages(total_pages);

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
      <div className="flex">

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
              <h2 className='title__product'> asdasd sd</h2>
            </div>
            <div>
              <Stars />
            </div>
            <div className='mt-5 flex flex-row'>
              <div className='recommended-bg-black'><span className='recommended-Text'> RECOMENDADO </span></div>
              <div className='mr-5'><span className=''> en x tipo de producto</span></div>
            </div>
            <div>
              <span className='price__font'><b>$19229</b></span>
            </div>
            <div className='infoProducto'>
              <h2 className='info__product'>Lo que tenés que saber de este producto</h2>
            </div>
            <div>
              <ProductDetail />
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default ItemDetail