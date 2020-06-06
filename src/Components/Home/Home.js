import React from 'react';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {
  Link
} from "react-router-dom";
function Home() {
  return (
    <div className="Home">
   <Jumbotron>
  <h1>Welcome to Ferns N Petals</h1>
  <p>
    <Button variant="link"  className="text-white" to="/cakes" as={Link}>Go to Cakes Menu</Button>
   
  </p>
</Jumbotron>
    </div>
  );
}

export default Home;
