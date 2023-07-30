import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CardText } from 'react-bootstrap-icons';


export const Item=({producto})=>{
   return (
    <div>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={producto.img} />
       <Card.Body>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <Card>
            ${producto.precio}
        </Card>
        <Card>
          Stock  {producto.stock}
        </Card>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
   )
}
