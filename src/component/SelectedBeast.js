
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
    }

    
    closing = () => {
        this.setState({ show:false })
    }
 

    render() {
        return (
            <div>

                <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick= {this.closing} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

        )
    }
}

export default SelectedBeast;