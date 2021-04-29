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
        

        this.setState({

            newhorns: (event.target.value)*1

        })
        

    };
  

    render() {
        return (

            <>
                <Form onChange={this.newoption} >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select HornedBeast Group :</Form.Label>
                        <Form.Control onChange={this.newoption} as="select">
                            <option value='0'>All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>other</option>

                        </Form.Control>
                    </Form.Group>


                </Form>

                <Main last={this.state.newhorns}/>
            </>
        )
    }
}
export default Formapp;