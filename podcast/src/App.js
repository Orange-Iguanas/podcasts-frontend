import './App.css';
// import Episodes from './Components/episodes.js';
// import podcasts from './Components/podcasts.js';
// import Following from './Components/following.js';
import { useState, useEffect } from 'react';
// import { Route, Link, Switch } from 'react-router-dom';
// import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import sampledata from './Models/sampledata.js';
import Card from 'react-bootstrap/Card';

function App() {
  // const [categories, setCategories] = useState([]);

  // const fetchCategories = async () => {
  //   try {
  //     const response = await fetch('https://www.podmyne.com/api/recommend', {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: body
  //     });
  //     // setCategories(categories);
  //     console.log("response", response);
  //     setCategories(data);
  //   } catch (error) {
  //       console.log(error);
  //   }
  // }
  // console.log("results", response);

  // useEffect(() => {
  //   // fetchCategories();
  // }, []);

  // console.log(categories);
console.log(sampledata);

  return (
    <div className="App">
      <h1>PodMyne</h1>
      <h2>What are your interests?</h2>
        <Dropdown>
          {/* <DropdownButton title="Interests"> */}
            {/* have each dropdown have an onclick to call api category */}
            {/* <Dropdown.Item>
            hi
            </Dropdown.Item>
            <Dropdown.Item>
            bye
            </Dropdown.Item>
          </DropdownButton> */}
        </Dropdown>
              <>
        <Button variant="outline-primary">Comedy</Button>{' '}
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
      <form className="details">
        <input type="text"/>
        <input type="submit"/>
      </form>
      <div className="results">
        { sampledata 
            ?  sampledata.map((sample, index) => {
              return (
                <div className="podcastsgroup">
                  <Card>
                    <div className="images">
                    <img
                    width={200}
                    height={200}
                    src={sample.image}/>
                    </div>
                    <h5>{sample.title}</h5>
                    <h6>{sample.categories}</h6>
                    <div>{sample.description}</div>
                    <a href={sample.website}>View Website</a>
                  </Card>
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
