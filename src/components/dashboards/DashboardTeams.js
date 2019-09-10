import React from 'react'
import {Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap'

export default class DashboardTeams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    name:"mobile ios"
                },
                {
                    name:"mobile android"
                },
                {
                    name:"mobile"
                },
                {
                    name:"mobile ios"
                },
            ]
        };
    }
    render(){
        return (
            <div class="m-5 container">
            <Card>
                <Card.Header>
                    <Form>
                        
                    </Form>
                </Card.Header>
                <Card.Body>
                    
                </Card.Body>
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
}
}