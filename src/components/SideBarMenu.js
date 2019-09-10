import React from 'react'
import { Accordion, Card, Nav, NavbarBrand } from 'react-bootstrap'

export default class SideBarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Nav style={styles.body} >
                <NavbarBrand className="p-2">Device Manager</NavbarBrand>
                <div class="p-2">Activity Feed</div>
                <div class="p-2">My Devices</div>
                <div class="p-2">Teams</div>
                <div class="p-2">Settings</div>
            </Nav>
        )
    }
}

const styles = {
    body: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #DDD',
        backgroundColor: '#f8f9fa'

    },
    item: {
        textAlign: 'left',
        
    }

}