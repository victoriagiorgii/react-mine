import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CardText } from 'react-bootstrap-icons'


export const Item=({prod})=>{
   return (
    <div>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={prod.img} />
       <Card.Body>
        <Card.Title>{prod.titulo}</Card.Title>
        <Card.Text>
          {prod.descripcion}
        </Card.Text>
        <CardText>
            ${prod.precio}
        </CardText>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

    </div>
   )
}
