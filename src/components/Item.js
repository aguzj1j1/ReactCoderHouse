import { Card,Button } from 'react-daisyui'
const Item = () => {
  return (
    <>
    <Card>
      <Card.Image
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
      />
      <Card.Body className="items-center text-center">
        <Card.Title tag="h2">Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions className="justify-end">
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item