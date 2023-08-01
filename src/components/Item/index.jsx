import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CardText, Link } from 'react-bootstrap-icons';


export const Item=({producto})=>{
   return (
    <div>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={producto.img} />
       <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <Card>
            ${producto.precio}
        </Card>
        <Card>
          Stock  {producto.stock}
        </Card>
        <Button as={Link} to={`/item/${producto.id}`} variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

    </div>
   )
}
