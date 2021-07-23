import './App.css';
import React from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import ButtonContainer from './Components/ButtonContainer';
// import Card from 'react-bootstrap/Card';


function App() {
  const [categorySelection, setCategorySelection] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const descriptionInput = useRef(null);


  const recommendRun = async (event) => {
    event.preventDefault();
    const userCat = categorySelection;
    const userDes = descriptionInput.current.value;
    const body = JSON.stringify({
        userCat, userDes
    });
    event.currentTarget.reset();
    console.log("testing. " + body);
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
      const data = await response.json();
      console.log("response", response);
      // console.log(userCat, userDes);
      // console.log(body);
      console.log('category selection: ' + categorySelection);
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
      <h1 className="PodMyne">
        <img src="/Group32.png" alt="logo"/> 
        PodMyne
      </h1>
      <div className="navlist">
        <li>Podcasts</li>
        <li>Dashboard</li>
        <li>Following</li>
      </div>
    </nav>
      {/* <form className="details" onSubmit={recommendRun}> */}
        <h1>What are you interested in?</h1>
        <h6>Choose one:</h6>
        <div className="buttonGroup">
          <ButtonContainer 
            categorySelection={categorySelection}
            setCategorySelection={setCategorySelection}
          />
        </div>
        <br />
        <br />
        <h1>What are you looking for?</h1>
        <h6>Filter based on interests</h6>
        <form className="details" onSubmit={recommendRun}>
          <hr className="solid"></hr>
          <p>In a sentence or two, tell us about what you're <br /> looking for based on your selected category. </p>
          <input type="text" placeholder="ex. I really love listening to people talk about food. Craft beer, new restaurants, and culinary skills." ref={descriptionInput}/>
          <input type="submit" className="generateButton" value="Generate Recommendations"/>
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
                  <div key={index} className="cards">
                    <ul className="cardlist">
                      <img
                        width={200}
                        height={200}
                        src={recommendation.image}
                        alt="cardImg"
                      />
                      <h5 className="recTitle"><b>{recommendation.title}</b></h5>
                      <h6 className="recAuthor"><b>{recommendation.author}</b></h6>
                      <h6 className="recCategory"><u>Category:</u> {recommendation.categories}</h6>
                      <div className="recDescription">{recommendation.description}</div>
                      <a href={recommendation.website} rel="noopener noreferrer" target="_blank" className="recWebsite">View Website</a>
                    </ul>
                  {/* {console.log(recommendations)} */}
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