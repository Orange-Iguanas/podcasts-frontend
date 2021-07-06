import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import Podcasts from './Components/podcasts.js';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import sampledata from './Models/sampledata.js';
import Nav from 'react-bootstrap/Nav';
// import Card from 'react-bootstrap/Card';


function App() {
  // const categorySelection = useRef(null);
  const descriptionInput = useRef(null);
  const recommendRun = async (event) => {
    event.preventDefault();
    // const userCat = categorySelection.current.value;
    const userDes = descriptionInput.current.value;
    const body = JSON.stringify({
      userDes
    });
    event.currentTarget.reset();
    console.log("testing");
    try {
      const response = await fetch('http://127.0.0.1:5000/app/recommend', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'key': 'form_data',
        },
        key: 'form_data',
        body: body,
      })
      console.log("response", response);
      // console.log(userCat,userDes);
      const data = await response.json();
      console.log("data", data);
    } catch(error) {
      console.error(error)
    }
  }
  useEffect(() => {
  },[]);
  return (
    <div className="App">
      <h1>PodMyne</h1>
      <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
      <h2>What are you interested in? Choose one:</h2>
        <Dropdown>
        </Dropdown>
              <>
        <Button variant="outline-secondary">Religion & Spirituality</Button>{' '}
        <Button variant="outline-success">Society & Culture</Button>{' '}
        <Button variant="outline-primary">Comedy</Button>{' '}
        <Button variant="outline-secondary">Christianity</Button>{' '}
        <Button variant="outline-success">TV & Film</Button>{' '}
        <Button variant="outline-primary">Music</Button>{' '}
        <Button variant="outline-secondary">Sports & Recreation</Button>{' '}
        <Button variant="outline-success">News & Politics</Button>{' '}
        <Button variant="outline-secondary">Business</Button>{' '}
        <Button variant="outline-success">Arts</Button>{' '}
        <Button variant="outline-primary">Education</Button>{' '}
        <Button variant="outline-secondary">Games & Hobbies</Button>{' '}
        <Button variant="outline-success">Health</Button>{' '}
        <Button variant="outline-primary">Technology</Button>{' '}
        <Button variant="outline-secondary">Professional</Button>{' '}
        <Button variant="outline-success">Self-Help</Button>{' '}
        <Button variant="outline-success">Management & Marketing</Button>{' '}
        <Button variant="outline-success">Science & Medicine</Button>{' '}
        <Button variant="outline-success">Video Games</Button>{' '}
        <Button variant="outline-success">Kids & Family</Button>{' '}
      </>
      <h2>Please enter a few sentences describing why you enjoy (category)</h2>
      <p>Example: "I love cooking and eating pizza on the weekends"</p>
      <Router>
        <Route path="/podcasts" component={Podcasts} />
      </Router>
      <form className="details" onSubmit={recommendRun}>
        <input type="text" ref={descriptionInput}/>
        <input type="submit" />
      </form>
      <div className="results">
        { sampledata 
            ?  sampledata.map((sample, index) => {
              return (
                <div className="cards">
                  <ul className="cardlist">
                    <img
                      width={200}
                      height={200}
                      src={sample.image}/>
                      <h5>{sample.title}</h5>
                      <h5>{sample.author}</h5>
                      <h6>{sample.categories}</h6>
                      <div>{sample.description}</div>
                      <a href={sample.website} target='_blank'>View Website</a>
                  </ul>
                {console.log(sample)}
              </div>
            )
          })
          : <p>Try Again</p>
        }
      </div>
    </div>
  );
}
export default App;