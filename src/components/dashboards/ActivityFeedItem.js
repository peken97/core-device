import React from 'react'
import {Card} from 'react-bootstrap'
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const icon = {
    ADD: 0,
    REMOVE: 1
}

export default class Posting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        let iconType = icon.add;
        switch(this.props.item.actionType){
            case icon.ADD:
                iconType = <MdAddCircle/>
            break;
            case icon.REMOVE:
                iconType = <MdRemoveCircle/>
            break;
        }
        return (
            <Card style={styles.body}>
                <div class="d-flex">
                    <div>{iconType}</div>
                    <div class="ml-3">{this.props.item.actionDescription}</div>
                </div>
                <div class="ml-3">
                    <div>{this.props.item.actionDate}</div>
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