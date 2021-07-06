import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import Podcasts from './Components/podcasts.js';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
// import Card from 'react-bootstrap/Card';


function App() {
  // const categorySelection = useRef(null);
  const descriptionInput = useRef(null);
  const [recommendations, setRecommendations] = useState([]);

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
      console.log(userDes);
      const data = await response.json();
      console.log("data", data);
      setRecommendations(data);
    } catch(error) {
      console.error(error)
    }
  }
  useEffect(() => {
  },[]);
  return (
    <div className="App">
    <nav className="nav">
      <h1 className="PodMyne"><img 
        // width={50}
        // height={50}
        src="/Group32.png"/> PodMyne</h1>
      <ul className="navlist">
        <li>
          Podcasts
        </li>
        <li>
          Dashboard
        </li>
        <li>
          Following
        </li>
      </ul>
    </nav>
      <form className="details" onSubmit={recommendRun}>
        <h1>What are you interested in? Choose one:</h1>
        <div className="buttonGroup">
          <button type="button" className="buttons">Religion & Spirituality</button>
          <button type="button" className="buttons">Society & Culture</button>
          <button type="button" className="buttons">Comedy</button>
          <button type="button" className="buttons">Christianity</button>
          <button type="button" className="buttons">TV & Film</button>
          <button type="button" className="buttons">Music</button>
          <button type="button" className="buttons">Sports & Recreation</button>
          <button type="button" className="buttons">News & Politics</button>
          <button type="button" className="buttons">Business</button>
          <button type="button" className="buttons">Arts</button>
          <button type="button" className="buttons">Education</button>
          <button type="button" className="buttons">Games & Hobbies</button>
          <button type="button" className="buttons">Health</button>
          <button type="button" className="buttons">Technology</button>
          <button type="button" className="buttons">Professional</button>
          <button type="button" className="buttons">Self-Help</button>
          <button type="button" className="buttons">Management & Marketing</button>
          <button type="button" className="buttons">Science & Medicine</button>
          <button type="button" className="buttons">Video Games</button>
          <button type="button" className="buttons">Kids & Family</button>
        </div>
        <br />
        <h1>What are you looking for?</h1>
        <h5>Filter based on interests</h5>
          <p>In a sentence or two, tell us about what you're <br /> looking for based on your selected category. </p>
          <input type="text" placeholder="ex. I really love listening to people talk about sports. Football and beer and misogyny." ref={descriptionInput}/>
          <input type="submit" classname="generateButton" value="Generate Recommendations"/>
      </form>
        <h1 className="resultsTitle">Recommended Podcasts</h1>
        <h6>Based on selected category and personal interests</h6>
        <div className="results">
          { recommendations 
              ?  recommendations.map((recommendation, index) => {
                return (
                  <div className="cards">
                    <ul className="cardlist">
                      <img
                        width={200}
                        height={200}
                        src={recommendation.image}/>
                        <h5 className="recTitle"><b>{recommendation.title}</b></h5>
                        <h6 className="recAuthor"><b>{recommendation.author}</b></h6>
                        <h6 className="recCategory"><u>Category:</u> {recommendation.categories}</h6>
                        <div className="recDescription">{recommendation.description}</div>
                        <a href={recommendation.website} target='_blank' className="recWebsite">View Website</a>
                    </ul>
                  {console.log(recommendations)}
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