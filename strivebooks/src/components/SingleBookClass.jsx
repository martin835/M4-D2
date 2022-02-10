import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import Comments from "./Comments";

class SingleBookClass extends Component {
  state = {
    selected: false,
  };

  /* toggleState = (event) => {
    if (this.state.selected === false) {
      this.setState({
        selected: true,
      });
      event.target.style.color = "red";
    } else {
      this.setState({
        selected: false,
      });
      event.target.style.color = "black";
    }
  }; */

  render() {
    return (
      <Col
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={3}
        className="mb-3"
        key={this.props.asin}
        /* onClick={(event) => this.toggleState(event)} */
      >
        <Card>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.category}
            </Card.Subtitle>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.price} $</Card.Text>
            
            <Comments asin={this.props.asin}/>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBookClass;

