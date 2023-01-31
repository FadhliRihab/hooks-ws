import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ratingstar from './Ratingstar';






const MovieCard = ({el}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
            {el.description}
        </Card.Text>
        <Ratingstar el={el} />
        <Button className='btn' variant="primary">{el.type}</Button>
        
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default MovieCard