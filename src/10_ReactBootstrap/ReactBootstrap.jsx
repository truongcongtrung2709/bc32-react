import React from 'react'
import {Button, Card} from "react-bootstrap"
const ReactBootstrap = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <Button variant="primary" >Primary</Button>
      <br/>
      <br/>

      <h1>Cards</h1>
      {/* Compound compoment*/}
      <Card className='w-25'>
        <Card.Img src="https://i.picsum.photos/id/10/200/300.jpg?hmac=94QiqvBcKJMHpneU69KYg2pky8aZ6iBzKrAuhSUBB9s"/>
        <Card.Body>
          <Card.Title>Photo</Card.Title>
          <Card.Text>Awesome Photo</Card.Text>
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default ReactBootstrap