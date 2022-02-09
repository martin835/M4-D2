import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBookClass extends Component {
  state = {
    selected: false,
  };

  toggleState = (event) => {
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
  };

  render() {
    return (
      <Col>
        <Card onClick={(event) => this.toggleState(event)}>
          <Card.Img
            variant="top"
            style={{ width: "166px", height: "250px", objectFit: "cover" }}
            src={this.props.img}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBookClass;
