import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {
  const {id} = useParams()
  return (
  <>
    <div className='container mx-auto px-28 mt-10 '>
      <ItemList categorys={id}/>
    </div>
  </>

  )
}

export default ItemListContainer;