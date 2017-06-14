import React, { Component } from "react";
import "./MessageList.css";
import { ref } from "../../config/constants";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    let rootRef = ref.child('messages');
    rootRef.on('value', snapshot => {
	    const messages = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const message = childSnapshot.val();
        messages.push(message);
      });

      this.setState({
        messages,
      });      
    });
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message, index) => (
          <p key={index}>{JSON.stringify(message)}</p>
        ))}
      </div>
    );
  }
}

export default MessageList;
