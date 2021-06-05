import {ListGroup} from 'react-bootstrap'
import {Component} from 'react'
class CommentArea extends Component {
    state ={
        comments:[]
    }

    componentDidMount = async () => {
        console.log(this.props.selected)
        try{
    let response = await fetch(" https://striveschool-api.herokuapp.com/api/comments/" + this.props.selected,  {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNGI5OGNlYWY0ODAwMTVjOTE4ZDciLCJpYXQiOjE2MjI3Mjg3ODUsImV4cCI6MTYyMzkzODM4NX0.j7xkMVQtET6X0k4BbyCJaeEk3bySl-z6kgWar_eyqg8"
    }}) 
    let data = await response.json()
    let book = await data
    this.setState(
        {comments:book}
        )
        console.log(this.state.comments)
    }catch(err){
        console.log("We Have A Problem", err )
    }
    }


    render(){
        return (
            <>
            <ListGroup >
                {
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                }
            </ListGroup>
            </>
          );
        }
    
}

 
export default CommentArea;