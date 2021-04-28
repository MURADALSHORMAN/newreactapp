import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            numclicks: 0,


        }
        // {console.log(this.state.numclicks);}
    }
    numberOfclicks = () => {
        this.setState({ numclicks: this.state.numclicks + 1 })
    }

    viewbeats = () => {
        this.setState({
            show: true,
            numclicks: this.state.numclicks + 1
        })
        // {console.log(this.state.show);}
    }

    closing = () => {
        this.setState({
            show: false,
        })
    }

    render() {

        return (

            <div>{
                <Card style={{ width: '18rem', margin: "20px" }}>
                    <Card.Img onClick={this.viewbeats} variant="top" src={this.props.url} />
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

                {
                    <SelectedBeast show={this.state.show} close={this.closing} url={this.props.url}
                        discraption={this.props.description} taitle={this.props.title} />
                }

            </div>
        )

    }
}

export default HornedBeast;