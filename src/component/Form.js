import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Main from './main';

class Formapp extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            newhorns: '',

        }

    }

    updateoption = (event) => {
        event.preventDefault();
    };

    newoption = (event) => {
        console.log(event);

        this.setState({

            newhorns: (event.target.value)

        })
        console.log(this.state.newhorns);

    };

    render() {
        return (

            <>
                <Form  >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select HornedBeast Group :</Form.Label>
                        <Form.Control onChange={this.newoption} as="select">
                            <option >Select one</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >other</option>

                        </Form.Control>
                    </Form.Group>


                </Form>

                <Main lastupdate={this.state.newhorns}/>
            </>
        )
    }
}
export default Formapp;