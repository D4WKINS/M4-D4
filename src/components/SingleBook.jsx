import  { Component } from 'react'
import {Col , Card} from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {

    render() {
        return (
        <>
      {
          <Col className="mx-auto">
            <Card>
              <Card.Img className="book-cover img-fluid"variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
              </Card.Body>
              {this.props.id && <CommentArea selected={this.props.id}/>}
            </Card>
          </Col>
      
      } 
       </>
       )
    }

}
export default SingleBook