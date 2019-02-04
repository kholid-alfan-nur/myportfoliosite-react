import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        /* REACT PROJECT */
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/*Project #1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        This is a progressive web application using React.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/*Project #2*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>React Project #2</CardTitle>
                    <CardText>
                        This is a progressive web application using React.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        /* C# WPF PROJECT */
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is C# WPF</h1></div>
            )
        /*ASP .NET CORE PROJECT */
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is ASP .Net Core</h1></div>
            )
        /*DATA ANALYSIS PROJECT */
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is Data Analysis</h1></div>
            )
        /*SQL SERVER PROJECT */
        } else if(this.state.activeTab === 4) {
            return(
                <div><h1>This is SQL Server</h1></div>
            )
            }
    }

        render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>C# WPF</Tab>
                    <Tab>ASP .Net Core</Tab>
                    <Tab>Data Analysis</Tab>
                    <Tab>SQL Server</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;