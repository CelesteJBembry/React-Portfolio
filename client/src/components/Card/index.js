import React from "react";
import {Button, Card} from 'react-bootstrap';

function ProjectCard(props) {
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     "Hello"
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    )}
export default ProjectCard