import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numclicks: 0
        }
    }
    numberOfclicks = () => {
        this.setState({ numclicks: this.state.numclicks + 1 })
    }

    render() {
        return (

            <div>{
                <Card style={{ width: '18rem', margin: "20px" }}>
                    <Card.Img variant="top" src={this.props.url} />
                    <Card.Body>
                        <Card.Title>
                            {this.props.title}
                        </Card.Title>

                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            {this.state.numclicks}
                        </Card.Text>
                        <Button onClick={this.numberOfclicks} variant='primary'>Vote
                    </Button>
                    </Card.Body>
                </Card>
            }

            </div>
        )
    }
}

export default HornedBeast;