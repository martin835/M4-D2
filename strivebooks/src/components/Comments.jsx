import { Component } from "react";
import {ListGroup, Button } from "react-bootstrap";

class Comments extends Component {

    state = {
        bookComments: [],
        showComments: false
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
              variant="primary"
              className="mb-2"
              onClick={() => this.state.showComments ? this.setState({ showComments: false }) : this.setState({ showComments: true })}
            >
              Show comments
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
              </ListGroup>
            )}
          </div>
        );
    }





}

export default Comments 