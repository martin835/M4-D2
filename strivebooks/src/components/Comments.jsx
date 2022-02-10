import { Component } from "react";
import {
  ListGroup,
  Button,
  ListGroupItem,
  Form} from "react-bootstrap";

class Comments extends Component {

    state = {
        bookComments: [],
        showComments: false,
        showAddComment: false,
    }

componentDidMount = async() => {
    console.log("i am mounted");
    let asin = this.props.asin 
    console.log(asin)

    try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
            },
          }
        );
        if (response.ok) {
            let data = await response.json()
            console.log(data)
            this.setState({
              bookComments: data,
              
            });
           
        } else {
            // alert('something went wrong :(')
           
        }
        } catch (error) {
        console.log(error)
        }
    }
    



    render () {
        return (
          <div>
            <Button
              variant="link"
              className="mb-2"
              onClick={() =>
                this.state.showComments
                  ? this.setState({ showComments: false })
                  : this.setState({ showComments: true })
              }
            >
              <i class="bi bi-list mr-2"></i>Show comments
            </Button>
            {this.state.showComments && (
              <ListGroup>
                {this.state.bookComments == 0 ? (
                  <ListGroup.Item>No Comments for this book :( </ListGroup.Item>
                ) : (
                  this.state.bookComments.map((comment) => (
                    <ListGroup.Item>
                      <i>"{comment.comment}"</i>
                    </ListGroup.Item>
                  ))
                )}
                <ListGroupItem>
                  <Button
                    variant="link"
                    onClick={() =>
                      this.state.showAddComment
                        ? this.setState({ showAddComment: false })
                        : this.setState({ showAddComment: true })
                    }
                  >
                    <i class="bi bi-plus-lg"></i>Add Comment
                  </Button>
                </ListGroupItem>
                {this.state.showAddComment && (
                  <ListGroupItem className="px-0">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                    <Button variant="link">
                      <i class="bi bi-envelope mr-2"></i>Send Comment
                    </Button>
                  </ListGroupItem>
                )}
              </ListGroup>
            )}
          </div>
        );
    }





}

export default Comments 