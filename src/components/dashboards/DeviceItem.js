import React from 'react'
import {Card} from 'react-bootstrap'
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";



export default class Device extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        
        return (
            <Card style={styles.body}>
                <div class="d-flex ">
                    {this.props.item.name}
                </div>
                

            </Card> 
        )
    }
}

const styles = {
    body : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "1em",
        padding: "1em",
        width: "100%"

    }
}