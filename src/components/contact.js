import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kholid Alfan Nur</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />           
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "22px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (226) 978-0706
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "22px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    kholidnur85@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "22px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    anur7439@conestogac.on.ca
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "22px", fontFamily: "Anton" }}
                  >
                    <a href="https://www.linkedin.com/in/kholid-alfan-nur/" style={{color: "black"}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    LinkedIn Account
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "22px", fontFamily: "Anton" }}
                  >
                    <a href="https://github.com/kholid-alfan-nur" style={{color: "black"}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    GitHub Account
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
