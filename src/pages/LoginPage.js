import React from 'react'
import HeaderLogin from '../components/HeaderLogin'
import FormSignUp from '../components/FormSignUp'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <HeaderLogin/>
                <div class="container">       
                    <FormSignUp/>
                </div>
            </div>
        );
    }
}

const styles = {
    body : {

    }
}