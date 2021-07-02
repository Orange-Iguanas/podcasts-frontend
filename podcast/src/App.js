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

function App(props) {

  const categorySelection = useRef(null);
  const descriptionInput = useRef(null);
  const [pods, setPods] = useState([]);

  const setRecommender = async (event) => {
    event.preventDefault();
    recommendRun(categorySelection.current.value, descriptionInput.current.value);
    event.currentTarget.reset();
  }

  // console.log(userCat,userDes);

  const recommendRun = async () => {
    // event.preventDefault();
    const userCat = categorySelection.current.value;
    const userDes = descriptionInput.current.value;
    const body = JSON.stringify({
      userCat,userDes
    });
    // event.currentTarget.reset();
    console.log("testing");
    try {
      const response = await fetch('http://127.0.0.1:5000/app/recommend', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        key: 'form_data',
        // form_data: body,
      })
      console.log("response", response);
      console.log(userCat,userDes);
      const please = await response.json();
      console.log("data", please);
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {

  },[]);

  return (
    <div className="App">
        <Dropdown>
          <DropdownButton title="Interests">
            have each dropdown have an onclick to call api category
            <Dropdown.Item>
            Food
            </Dropdown.Item>
            <Dropdown.Item>
            bye
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      <h2>Please enter a few sentences describing why you enjoy (category)</h2>
      <p>Example: "I love cooking and eating pizza on the weekends"</p>
      <form className="details" onSubmit={setRecommender}>
        <input type="text" id="formValueId" ref={categorySelection}/>
        <input type="text" id="formValueId" ref={categorySelection,descriptionInput}/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
