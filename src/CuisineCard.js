import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';

class CuisineCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cuisineOptions: ['American', 'Chinese', 'Italian', 'Mexican'],
            cuisinesChosen: []
        }
    }

    render(){
        return(
            <Card style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Text>
                My favorite cuisine(s) are:
                </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
                {this.state.cuisineOptions.map(cuisine => (
                    <ListGroup.Item key={cuisine} action>{cuisine}</ListGroup.Item>
                ))}
            </ListGroup>
            </Card>
        )
    }
}

export default CuisineCard;