import React, { Component } from "react";
import { Card, Row, Col, Container,Form,FormControl} from "react-bootstrap";
import SingleBook from './SingleBook'


class BookList extends Component {
  state = { 
    query: "",
    selected:""
 }
  render() {
    return (
      <Container>
          <Form className="d-flex ms-auto">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={e=> this.setState({query: e.target.value})}
            />
            </Form>
        <Row xs={1} md={2} lg={4} className="g-4">
          {
         this.props.books.filter(b => b.title.toLowerCase().includes(this.state.query)).map(b => (
          <Col xs={3} key={b.asin} onClick={()=> this.setState({id:b.asin,selected:b})}>
              <SingleBook book={b} id={this.state.selected && this.state.selected.id}/>

          </Col>
      ))
          }
        </Row>
      </Container>
    );
  }
}

export default BookList;
