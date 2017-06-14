import React, { Component } from "react";
import "./AddNewMessage.css";
import { addNewMessage } from "../../helpers/database";

import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import Button from "react-bootstrap/lib/Button";

class AddNewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.addNewMessageToDB = this.addNewMessageToDB.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  addNewMessageToDB() {
    console.log("this.state.value", this.state.value);
    addNewMessage(this.state.value);
  }
  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Message</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <Button
            bsStyle="primary"
            bsSize="small"
            type="button"
            onClick={this.addNewMessageToDB}
          >
            Spara
          </Button>
        </FormGroup>
      </form>
    );
  }
}

export default AddNewMessage;
