import { Component } from "react";
import {
  ListGroup,
  Button,
  ListGroupItem,
  Form,
  Spinner,
} from "react-bootstrap";

class Comments extends Component {

    state = {
        bookComments: [],
        showComments: false,
        showAddComment: false,
        newComment: {
            comment: "",
            rate: "",
            elementId: ""
        },
        isLoading: true
    }

componentDidMount = async() => {
    console.log("i am mounted");
    let asin = this.props.asin 
    

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
            /* console.log(data) */
            this.setState({
              bookComments: data,
              isLoading: false
            });
           
        } else {
            // alert('something went wrong :(')
           
        }
        } catch (error) {
        console.log(error)
        }
    }
    
postComment = async (e) => {
     e.preventDefault();
     console.log("I post")    

    this.state.newComment.rate = document.getElementById("ratingValue").value;
    this.state.newComment.comment =
      document.getElementById("commentValue").value;
    this.state.newComment.elementId = this.props.asin; 

    console.log(this.state.newComment);
    
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.componentDidMount()
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
    }
}

deleteComment = async (e) => {
    e.preventDefault();
    console.log("I DELETE")
    console.log(e.target.id)

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + e.target.id,
        {
          method: "DELETE",
          headers: {
            
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.componentDidMount();
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
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
              <i className="bi bi-list mr-2"></i>Show comments
            </Button>
            {this.state.showComments && (
              <ListGroup>
                {this.state.isLoading && (
                  <Spinner animation="border" variant="primary" />
                )}
                {this.state.bookComments == 0 ? (
                  <ListGroup.Item>No Comments for this book :( </ListGroup.Item>
                ) : (
                  this.state.bookComments.map((comment) => (
                    <ListGroup.Item>
                      <i>"{comment.comment}"</i>
                      <Button
                        variant="link"
                        id={comment._id}
                        onClick={this.deleteComment}
                      >
                        <i class="bi bi-trash3"></i>Delete
                      </Button>
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
                    <i className="bi bi-plus-lg"></i>Add Comment
                  </Button>
                </ListGroupItem>
                {this.state.showAddComment && (
                  <ListGroupItem className="px-0">
                    <Form onSubmit={this.postComment}>
                      <Form.Group className="mb-3" controlId="ratingValue">
                        <Form.Label>Rating:</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="add rating from 1-5"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="commentValue">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Button variant="link" type="submit">
                        <i className="bi bi-envelope mr-2"></i>Send Comment
                      </Button>
                    </Form>
                  </ListGroupItem>
                )}
              </ListGroup>
            )}
          </div>
        );
    }





}

export default Comments 