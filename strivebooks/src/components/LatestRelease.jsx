import books from '../data/scifi.json'
import {Container, Row, Col, Card} from 'react-bootstrap'


const LatestRelease = () => (
  <Container fluid>
    <Row>
      {books.map((book) => (
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {book.category}
              </Card.Subtitle>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.price} €</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);


export default LatestRelease