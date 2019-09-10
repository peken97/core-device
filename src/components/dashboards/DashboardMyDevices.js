import React from 'react'
import {Card, Button, Form, FormControl, Modal} from 'react-bootstrap'
import Device from './DeviceItem'

export default class DashboardMyDevices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewDeviceModal: false,
            devices: [
                {
                    name: "Samsung s7",
                },
                {
                    name: "Samsung s3",
                },
                {
                    name: "Nexus S",
                },
                {
                    name: "Samsung s7",
                },
            ]
        };

        this.modalRef = React.createRef()

        this.handleOpenNewDeviceModal = this.handleOpenNewDeviceModal.bind(this)
        this.handleCloseNewDeviceModal = this.handleCloseNewDeviceModal.bind(this)
    }
    handleCloseNewDeviceModal(){
        this.setState({
            showNewDeviceModal: false
        })
        

    }
    handleOpenNewDeviceModal(){
        this.setState({
            showNewDeviceModal: true
        })
    }
    render(){
        const items = this.state.devices.map((item, i) => {return(<Device key={i} item={item} index={i}/>)})
        console.log(this.modalRef.current)
        
        
        return (
            <div class="m-5 container">
                <Modal show={this.state.showNewDeviceModal} onHide={this.handleCloseNewDeviceModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a New Device</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Device Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter device name"/>
                            </Form.Group>                           
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseNewDeviceModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleCloseNewDeviceModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <h4>Your Organization's Devices</h4>
                <Card>
                    <Card.Header>

                       <div class="d-flex justify-content-left">
                            <Button variant="secondary" onClick={this.handleOpenNewDeviceModal}>Add New Device</Button>
                       </div>
                       
                    </Card.Header>
                    <Card.Body>{items}</Card.Body>
                </Card>
           </div>
        )
    }
}

const styles = {
    filterBody : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    filterBodyItem : {
        marginRight: "5px"
    },
    hideModal : {
        display: "none",
    },
    showModal : {
        display: "block"
    }

}