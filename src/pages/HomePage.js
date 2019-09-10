import React from 'react'
import DashboardActivityFeed from '../components/dashboards/DashboardActivityFeed'
import DashboardMyDevices from '../components/dashboards/DashboardMyDevices'
import DashboardSettings from '../components/dashboards/DashboardSettings'
import DashboardTeams from '../components/dashboards/DashboardTeams'
import {  Nav, NavbarBrand } from 'react-bootstrap'

const dashboards = {
    ACTIVITYFEED: 0,
    TEAMS: 1,
    SETTINGS: 2,
    DEVICES: 3,
}

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDashboard: dashboards.ACTIVITYFEED
        };

        this.handleMenuClickSetDashboardAsActivityFeed = this.handleMenuClickSetDashboardAsActivityFeed.bind(this)
        this.handleMenuClickSetDashboardAsSettings = this.handleMenuClickSetDashboardAsSettings.bind(this)
        this.handleMenuClickSetDashboardAsTeams = this.handleMenuClickSetDashboardAsTeams.bind(this)
        this.handleMenuClickSetDashboardAsMyDevices = this.handleMenuClickSetDashboardAsMyDevices.bind(this)
    }

    handleMenuClickSetDashboardAsActivityFeed() {
        this.setState({
            selectedDashboard: dashboards.ACTIVITYFEED
        })
    }
    handleMenuClickSetDashboardAsSettings() {
        this.setState({
            selectedDashboard: dashboards.SETTINGS
        })
    }
    handleMenuClickSetDashboardAsTeams() {
        this.setState({
            selectedDashboard: dashboards.TEAMS
        })
    }
    handleMenuClickSetDashboardAsMyDevices() {
        this.setState({
            selectedDashboard: dashboards.DEVICES
        })
    }

    render() {
        const selectedDashboard = this.state.selectedDashboard;
        let selectedDashboardJSX = <DashboardActivityFeed/>
        switch(selectedDashboard){
            case dashboards.ACTIVITYFEED:
                selectedDashboardJSX = <DashboardActivityFeed/>
            break;
            case dashboards.TEAMS:
                selectedDashboardJSX = <DashboardTeams/>
            break;
            case dashboards.SETTINGS:
                selectedDashboardJSX = <DashboardSettings/>
            break;
            case dashboards.DEVICES:
                selectedDashboardJSX = <DashboardMyDevices/>
            break;
        }

        return (
            <div class="d-flex h-100">
                <Nav style={styles.menuBody} >
                    <NavbarBrand className="p-2">Device Manager</NavbarBrand>
                    <div class="p-2" value={dashboards.ACTIVITYFEED} onClick={this.handleMenuClickSetDashboardAsActivityFeed}>Activity Feed</div>
                    <div class="p-2" value={dashboards.DEVICES} onClick={this.handleMenuClickSetDashboardAsMyDevices}>My Devices</div>
                    <div class="p-2" value={dashboards.TEAMS} onClick={this.handleMenuClickSetDashboardAsTeams}>Teams</div>
                    <div class="p-2" value={dashboards.SETTINGS} onClick={this.handleMenuClickSetDashboardAsSettings}>Settings</div>
                </Nav>
                
                    <div class="d-flex justify-content-center w-100" style={styles.contentBody}>
                            {selectedDashboardJSX}
                    </div>
                
                
                
            </div>
        );
    }
}

const styles = {
    menuBody: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #DDD',
        backgroundColor: '#f8f9fa',
        position: "fixed",
        height: "100vh",
        marginRight: "10px",
        
    },
    contentBody: {
        marginLeft: "200px",
        justifyContent: "center"
    }


}