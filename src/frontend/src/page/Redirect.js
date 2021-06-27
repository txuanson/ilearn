import React from 'react';
import { Button } from 'reactstrap';

function Redirect() {
  return (
    <div style={{background:"#0A9EBB", color:"#fff", alignItems:"center", padding:"20px"}}>
        <h1>Authentication successful!</h1>
        <a href="/Homepage"><Button color="primary">Return to Homepage</Button></a>
    </div>
  )
};

export default Redirect;