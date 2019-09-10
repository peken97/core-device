import React from 'react'
import {Navbar, Form, InputGroup, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class HeaderLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

        this.onClickButtonLogin = this.onClickButtonLogin.bind(this);
    }

    onClickButtonLogin() {
        let path = `home`;
    }

    

    render() {
        return (
            <Navbar bg="light" expand="lg" style={styles.body} className="mb-3">
                <Navbar.Brand>Device Manager</Navbar.Brand>
                <Form style={styles.form}>
                    <div>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Username"
                                type="email"
                                aria-label="Username"
                            />
                        </InputGroup>
                    </div>
                    <div className="ml-4">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Password</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Password"
                                type="password"
                                aria-label="Username"
                            />
                        </InputGroup>
                    </div>
                    <div className="ml-4">
                        <Link to="/home">
                            <Button variant="secondary" onClick={this.onClickButtonLogin}>Login</Button>
                        </Link>
                    </div>
                    
                </Form>
            </Navbar>
        );
    }
}

const styles = {
    body : {
        display: 'flex'
    },
    form : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
        
    }

}

