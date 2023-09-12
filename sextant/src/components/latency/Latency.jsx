import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

class Latency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }

    componentDidMount() {
        client.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
            })
        };
    }

    render() {
        return (
          <div>
            <h2>Latency</h2>
            <span className="PylonConnector">
                {this.state.latency}
            </span>
          </div>
        );
    }
}

export default Latency;