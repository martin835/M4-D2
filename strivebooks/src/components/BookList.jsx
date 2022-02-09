// import SingleBook from "./SingleBook" This is for a functional component
import SingleBookClass from "./SingleBookClass"; // This is for class component
import { Container, Row, Form, FormControl } from "react-bootstrap";
import MyBadge from "./MyBadge";
import WarningSing from "./WarningSign";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container fluid>
        <h1 id="Latest">
          Latest Releases <MyBadge content="New" color="grey" />
        </h1>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={this.state.searchQuery}
            onChange={(e) =>
              this.setState({
                searchQuery: e.target.value,
              })
            }
          />
        </Form>
        <WarningSing content="This is some different alert" />
        <Row>
          {this.props.books
            .filter(
              (book) =>
                book.title
                  .toLowerCase()
                  .indexOf(this.state.searchQuery.toLowerCase()) !== -1
            )
            .map((book) => (
              <SingleBookClass
                title={book.title}
                img={book.img}
                key={book.asin}
                
              />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
