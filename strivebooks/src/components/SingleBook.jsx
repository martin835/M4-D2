import { Card, Col } from "react-bootstrap";

const SingleBook = ({ img, title }) => (
  <Col>
    <Card>
      <Card.Img
        variant="top"
        style={{ width: "166px", height: "250px", objectFit: "cover" }}
        src={img}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

export default SingleBook;
