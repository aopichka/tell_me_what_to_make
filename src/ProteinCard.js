import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';

class ProteinCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            proteinOptions: ['Chicken', 'Beef', 'Turkey', 'Fish'],
            proteinsChosen: []
        }
    }

    addToProteins = (protein) => {
        if(this.state.proteinsChosen.includes(protein)){
            const index = this.state.proteinsChosen.indexOf(protein)
            const proteinsChosen = this.state.proteinsChosen.splice(index - 1, 1)
            this.setState({
                proteinsChosen: proteinsChosen
            })
        }
        else {
            const proteinsChosen = this.state.proteinsChosen.concat(protein)
            this.setState({
                proteinsChosen: proteinsChosen
            })
        }
    };

    render() {
        console.log(this.state.proteinsChosen)
        return(
            <Card style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Text>
                My favorite protein(s) are:
                </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
                {this.state.proteinOptions.map(protein => (
                    <ListGroup.Item action key={protein} onClick={() => this.addToProteins(protein)}>{protein}</ListGroup.Item>
                ))}
            </ListGroup>
            </Card>
        )
    }
}

export default ProteinCard;