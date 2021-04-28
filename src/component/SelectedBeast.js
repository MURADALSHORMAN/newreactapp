
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




class SelectedBeast extends React.Component {




        render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.close} >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.taitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="imgsize" src={this.props.url} />
                        <p>{this.props.discraption}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.close} variant="secondary" >
                            Close
                         </Button>

                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default SelectedBeast;