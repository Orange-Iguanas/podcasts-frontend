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
// import Card from 'react-bootstrap/Card';

function App() {

  const categorySelection = useRef(null);
  const descriptionInput = useRef(null);

  const recommendRun = async (event) => {
    event.preventDefault();
    const userCat = categorySelection.current.value;
    const userDes = descriptionInput.current.value;
    const body = JSON.stringify({
      userCat,userDes
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
      console.log(userCat,userDes);
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
      <h2>What are your interests?</h2>
        <Dropdown>
          <DropdownButton title="Interests">
            {/* have each dropdown have an onclick to call api category */}
            <Dropdown.Item ref={categorySelection}>
            Food
            </Dropdown.Item>
            <Dropdown.Item>
            bye
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
              <>
        <Button variant="outline-primary" ref={categorySelection}>Comedy</Button>{' '}
        <Button variant="outline-secondary">Music</Button>{' '}
        <Button variant="outline-success">Category</Button>{' '}
        <Button variant="outline-primary">Business</Button>{' '}
        <Button variant="outline-secondary">Interest</Button>{' '}
        <Button variant="outline-success">dgdg</Button>{' '}
        <Button variant="outline-primary">eeee</Button>{' '}
        <Button variant="outline-secondary">hiiii</Button>{' '}
        <Button variant="outline-success">byeee</Button>{' '}
      </>
      <h2>Please enter a few sentences describing why you enjoy (category)</h2>
      <p>Example: "I love cooking and eating pizza on the weekends"</p>
      <Router>
        <Route path="/podcasts" component={Podcasts} />
      </Router>
      <form className="details" onSubmit={recommendRun}>
        <input type="text" ref={categorySelection,descriptionInput}/>
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
