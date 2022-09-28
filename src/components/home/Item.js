import { Card, Button } from 'react-daisyui'
import { Link } from 'react-router-dom'
const Item = ({ src, title, description, price, stock,  id }) => {
  return (
    <>

      <Card>
        <Link to={`/product/${id}`}>
          <Card.Image src={src[0]} alt="Shoes" className='object-contain h-48 w-96' />
        </Link>
        <Card.Body className="items-center text-center">
          <Link to={`/product/${id}`}>
            <Card.Title tag="h2">{title}</Card.Title>
            <p>{description}</p>
          </Link>
          <Card.Title tag="h3">{price}$</Card.Title>

          <Card.Actions className="justify-end">
            <Link to={`/product/${id}`}>
              <Button color="primary">Ver producto</Button>
            </Link>
          </Card.Actions>
        </Card.Body>
      </Card>

    </>
  )
}

export default Item