import React, { useEffect, useState } from "react";
import "./UserIp.css";

const UserIp = ({ipv6}) => {
  const [ipAddress, setIpAddress] = useState(null);
  const apiUrl = ipv6 ? 'https://api.ipify.org?format=json&ipv=6': 'https://api.ipify.org?format=json';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip)
      })
      .catch((error) => {
        console.log('Error fetching IP address:', error);
      })
  }, [ipv6, apiUrl]);

  return (
    <div className="user-ip">
      <h2>User's IP</h2>
      {ipAddress === null ? (
        <span>Loading IP address. . .</span>
      ):(
        <p>Your {ipv6 ? 'IPv6' : 'IPv4'} address is: {ipAddress}</p>
      )}
    </div>
  );
};

export default UserIp;
