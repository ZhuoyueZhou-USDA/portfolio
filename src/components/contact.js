import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3>Zhuoyue Zhou</h3>
            <img
              src={require("../img/kk_self.png")}
              className="avatar-img"
              alt="kk"
            />
            <p>
              I currently work as Web Developer at Amerilink International Corp,
              fluent in using Angular, HTML/CSS, JavaScript, JQuery, Bootstrap
              as well as back end language such as PHP to create user friendly
              web pages. Experienced in AJAX, Restful APIs and Google Map
              JavaScript APIs.
            </p>
            <p>Looking to build a great career in Front End Developer.</p>
          </Cell>
          <Cell col={6}>
            <h3>Contact Me</h3>
            <hr />
            <List className="contact-list">
              <ListItem>
                <ListItemContent style={{ fontSize: "20px" }}>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  &nbsp;&nbsp;(508) 615-9825
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: "20px" }}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  &nbsp;&nbsp;zhuoyuezhou@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: "20px" }}>
                  <i className="fa fa-address-card" aria-hidden="true" />
                  &nbsp;&nbsp;Highland Park, New Jercey
                </ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
