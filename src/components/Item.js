import { Card, Button } from 'react-daisyui'
import ItemCount from './ItemCount'
const Item = ({ src, title, description, price,stock,idProducto }) => {
  // debugger;
  return (
    <>
      <Card>
        <Card.Image src={src} alt="Shoes" className='object-contain h-48 w-96' />
          <Card.Body className="items-center text-center">
            <Card.Title tag="h2">{title}</Card.Title>
            <p>{description}</p>
            <Card.Title tag="h3">{price}$</Card.Title>
            <ItemCount key={idProducto} stock={stock}></ItemCount>
            <Card.Actions className="justify-end">
              <Button color="primary">Comprar</Button>
            </Card.Actions>
          </Card.Body>
      </Card>
    </>
  )
}

export default Item