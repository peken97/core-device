import React from 'react'
import {Card, Form, Dropdown, ButtonToolbar} from 'react-bootstrap'
import ActivityFeedItem from './ActivityFeedItem'

export default class DashboardActivityFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityFeedItems: [
                {
                    actionType: 1,
                    actionDescription: "Item #1",
                    actionDate: "6:09 AM"

                },
                {
                    actionType: 0,
                    actionDescription: "Item #2",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #3",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 1,
                    actionDescription: "Item #4",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 1,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
                {
                    actionType: 0,
                    actionDescription: "Item #5",
                    actionDate: "6:09 AM"
                },
            ]
        };
    }
    render(){

        const items = this.state.activityFeedItems.map((item, i) => {return(<ActivityFeedItem key={i} item={item} index={i}/>)})
        console.log(items)
        return (
           <div class="m-5 container">
                <Card>
                    <Card.Header>
                        <Form>
                            <ButtonToolbar style={styles.filterBody}>
                                <label class="mr-3">Filter by: </label>
                                <div className="d-flex">
                                <Dropdown style={styles.filterBodyItem}>
                                    <Dropdown.Toggle variant="secondary">All Actions</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Action</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown style={styles.filterBodyItem}>
                                    <Dropdown.Toggle variant="secondary">All Users</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Warren</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown style={styles.filterBodyItem}>
                                    <Dropdown.Toggle variant="secondary">All Dates</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Warren</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </div>
                                
                            </ButtonToolbar>
                        </Form>
                    </Card.Header>
                    <Card.Body>
                        {items}
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