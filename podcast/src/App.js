import './App.css';
import React from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import ButtonContainer from './Components/buttons';
// import Card from 'react-bootstrap/Card';


function App() {
  const [categorySelection, setCategorySelection] = useState('');
  const descriptionInput = useRef(null);
  const [recommendations, setRecommendations] = useState([]);


  const recommendRun = async (event) => {
    event.preventDefault();
    const userCat = categorySelection.current.value;
    const userDes = descriptionInput.current.value;
    const body = JSON.stringify({
       userCat, userDes
    });
    event.currentTarget.reset();
    console.log("testing");
    try {
      const response = await fetch('https://www.podmyne.com/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'key': 'form_data',
        },
        key: 'form_data',
        body: body,
      })
      console.log("response", response);
      console.log(userCat, userDes);
      console.log(body);
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
      <div className="navlist">
        <li>
          Podcasts
        </li>
        <li>
          Dashboard
        </li>
        <li>
          Following
        </li>
      </div>
    </nav>
      {/* <form className="details" onSubmit={recommendRun}> */}
        <h1>What are you interested in?</h1>
        <h6>Choose one:</h6>
        <div className="buttonGroup">
        <ButtonContainer/>
          {/* <input type="button" value="Religion & Spirituality" ref={categorySelection}/>
          <input type="button" value="Society & Culture" ref={categorySelection}/>
          <input type="button" value="Comedy" ref={categorySelection}/>
          <input type="button" value="Christianity" ref={categorySelection}/>
          <input type="button" value="TV & Film" ref={categorySelection}/>
          <input type="button" value="Music" ref={categorySelection}/>
          <input type="button" value="Sports & Recreation" ref={categorySelection}/>
          <input type="button" value="News & Politics" ref={categorySelection}/>
          <input type="button" value="Business" ref={categorySelection}/>
          <input type="button" value="Arts" ref={categorySelection}/>
          <input type="button" value="Education" ref={categorySelection}/>
          <input type="button" value="Games & Hobbies" ref={categorySelection}/>
          <input type="button" value="Health" ref={categorySelection}/>
          <input type="button" value="Technology" ref={categorySelection}/>
          <input type="button" value="Professional" ref={categorySelection}/>
          <input type="button" value="Self-Help" ref={categorySelection}/>
          <input type="button" value="Management & Marketing" ref={categorySelection}/>
          <input type="button" value="Science & Medicine" ref={categorySelection}/>
          <input type="button" value="Video Games" ref={categorySelection}/>
          <input type="button" value="Kids & Family" ref={categorySelection}/> */}
          {/* <button ref={categorySelection} value="Religion & Spirituality" type="submit" className="buttons">Religion & Spirituality</button>
          <button ref={categorySelection} value="Society & Culture" type="submit" className="buttons">Society & Culture</button>
          <button ref={categorySelection} value="Comedy" type="submit" className="buttons">Comedy</button>
          <button ref={categorySelection} value="Christianity" type="button" className="buttons">Christianity</button>
          <button ref={categorySelection} value="TV & Film" type="submit" className="buttons">TV & Film</button>
          <button ref={categorySelection} value="Music" type="submit" className="buttons">Music</button>
          <button ref={categorySelection} value="Sports & Recreation" type="submit" className="buttons">Sports & Recreation</button>
          <button ref={categorySelection} value="News & Politics" type="submit" className="buttons">News & Politics</button>
          <button ref={categorySelection} value="Business" type="submit" className="buttons">Business</button>
          <button ref={categorySelection} value="Arts" type="submit" className="buttons">Arts</button>
          <button ref={categorySelection} value="Education" type="submit" className="buttons">Education</button>
          <button ref={categorySelection} value="Games & Hobbies" type="submit" className="buttons">Games & Hobbies</button>
          <button ref={categorySelection} value="Health" type="submit" className="buttons">Health</button>
          <button ref={categorySelection} value="Technology" type="submit" className="buttons">Technology</button>
          <button ref={categorySelection} value="Professional" type="submit" className="buttons">Professional</button>
          <button ref={categorySelection} value="Self-Help" type="submit" className="buttons">Self-Help</button>
          <button ref={categorySelection} value="Management & Marketing" type="submit" className="buttons">Management & Marketing</button>
          <input type="button" ref={categorySelection} value="Science & Medicine" className="buttons"/>
          <button ref={categorySelection} value="Video Games" type="submit" className="buttons">Video Games</button>
          <button ref={categorySelection} value="Kids & Family" type="submit" className="buttons">Kids & Family</button>
          <input type="button" value="Music" ref={categorySelection}/> */}
        </div>
        <br />
        <br />
        <h1>What are you looking for?</h1>
        <h6>Filter based on interests</h6>
        <form className="details" onSubmit={recommendRun}>
        <hr className="solid"></hr>
          <p>In a sentence or two, tell us about what you're <br /> looking for based on your selected category. </p>
          <input type="text" placeholder="ex. I really love listening to people talk about food. Craft beer, new restaurants, and culinary skills." ref={descriptionInput}/>
          <input type="submit" classname="generateButton" value="Generate Recommendations"/>
      </form>
      <br />
      <br />
        <h1 className="resultsTitle">Recommended Podcasts</h1>
        <h6>Based on selected category and personal interests</h6>
        <hr className="solid"></hr>
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
            : <p>No results available. Try Again</p>
          }
        </div>
    </div>
  );
}
export default App;