import React from 'react'
import axios from 'axios'
import {Tabs, Form, Tab, Button} from 'react-bootstrap'

export default class FormSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            orgID: "",
            orgName: ""
        };
        this.handleSignUpUserClick = this.handleSignUpUserClick.bind(this)
        this.handleSignUpOrgClick = this.handleSignUpOrgClick.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleOrgIDChange = this.handleOrgIDChange.bind(this)
        this.handleOrgNameChange = this.handleOrgNameChange.bind(this)
    }
    handleSignUpUserClick(){
        axios.get("/ping").then((res) => {
            console.log(res)
        }).catch((e) =>{
            alert(e.message)
        })
    }
    handleSignUpOrgClick(){
        axios.get("/ping").then((res) => {
            console.log(res)
        }).catch((e) =>{
            alert(e.message)
        })
    }
    handleEmailChange(e){
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        })
    }
    handleOrgIDChange(e){
        this.setState({
            orgID: e.target.value
        })
    }
    handleOrgNameChange(e){
        this.setState({
            orgName: e.target.value
        })
    }
    render(){
        return (
            <Form style={styles.body}>
                <Tabs defaultActiveKey="user">
                    <Tab eventKey="user" title="User">
                        <div class="mt-3"></div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} value={this.state.email}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
                        </Form.Group>
                        <Form.Group controlId="formOrgId">
                            <Form.Label>Organization Id</Form.Label>
                            <Form.Control type="text" placeholder="Enter unique id" onChange={this.handleOrgIDChange} value={this.state.orgID}/>
                            <Form.Text className="text-muted">
                                Your organization's unique id to be registered with us.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="secondary" onClick={this.handleSignUpUserClick}>
                            Sign Up
                        </Button>
                    </Tab>
                    <Tab eventKey="organization" title="Organization">
                        <div class="mt-3"></div>
                        <Form.Group controlId="formOrgName">
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter organization name" onChange={this.handleOrgNameChange} value={this.state.orgName}/>
                            <Form.Text className="text-muted">
                                Your organization's display name.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formOrgId">
                            <Form.Label>Organization Id</Form.Label>
                            <Form.Control type="text" placeholder="Enter unique id" onChange={this.handleOrgIDChange} value={this.state.orgID}/>
                            <Form.Text className="text-muted">
                                Your organization's unique id to be registered with us.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" onChange={this.handleEmailChange} value={this.state.email}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="secondary" onClick={this.handleSignUpOrgClick}>
                            Sign Up
                        </Button>
                    </Tab>
                </Tabs>
                
            </Form>
        )
    }
}

const styles = {
    body : {
        border: "2px solid #DDD",
        padding: "1em"
    }
}