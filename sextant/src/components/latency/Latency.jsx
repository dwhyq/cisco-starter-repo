// Latency.jsx
import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://localhost:55455");

const Latency = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    client.onmessage = (message) => {
      setLatency(new Date().getTime() - parseInt(message.data));
    };

    return () => {
      // Clean up WebSocket when the component unmounts
      client.close();
    };
  }, []);

  return (
    <div>
      <h2>Latency</h2>
      {latency !== null && <p>Packet Latency: {latency} ms</p>}
    </div>
  );
};

export default Latency;
