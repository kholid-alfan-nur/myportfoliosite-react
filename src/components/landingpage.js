import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Antu_face-glasses.svg/2000px-Antu_face-glasses.svg.png" alt="avatar" className="avatar-image"/>

                    <div className="banner-text">
                        <h1>Software Developer</h1>
                        <hr />
                        <p>HTML/CSS | React | Bootstrap | Javascript | C# | php | MS SQL Server | SQLite | C# | ASP .Net Core | Vue.js | Agile | Systems Analysis and Design
                        </p>
                        
                        <div className="social-links">
                        {/*LinkedIn*/}
                        <a href="https://www.linkedin.com/in/kholid-alfan-nur/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/*GitHub*/}
                        <a href="https://github.com/kholid-alfan-nur" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export  default Landing;