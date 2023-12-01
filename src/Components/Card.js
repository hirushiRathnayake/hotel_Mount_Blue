import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.cImg} />
      <Card.Body>
        <Card.Title>{props.Cname}</Card.Title>
        <Card.Text>
       {props.cDescription}
       <br/>
       {props.cDescription1}
       <br/>
       {props.cDescription2}
        </Card.Text>
        <Button variant="primary">{props.cButton}</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;