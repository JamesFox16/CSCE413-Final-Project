import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from '../images/cta.jpg';

export default class CardTile extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} style={{ padding: 15 }} />
        <Card.Body>
          <Card.Title>{this.props.cardTitl}</Card.Title>
          <Card.Text>{this.props.cardText}</Card.Text>
          <Button variant="primary">View visualization</Button>
        </Card.Body>
      </Card>
    );
  }
}
