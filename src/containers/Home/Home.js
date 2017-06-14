import React, { Component } from "react";
import logo from "../../logo.svg";
import "./Home.css";
import Grid from "react-bootstrap/lib/Grid";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import AddNewMessage from "../../components/AddNewMessage";
import MessageList from "../../components/MessageList";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <Jumbotron>
                <h1>React Firebase Demo</h1>
                <p>How to get going quickly</p>
              </Jumbotron>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <AddNewMessage />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <MessageList />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
