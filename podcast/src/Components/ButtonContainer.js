import React from 'react';
// import { useState, useEffect } from 'react';
// import { useRef } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function ButtonContainer({ categorySelection, setCategorySelection }) {
    // const categorySelection = useRef('');
    const array = [ 'Religion & Spirituality', 'Society & Culture', 'Comedy', 'Christianity', 'TV & Film', 'Music', 'Sports & Recreation', 'News & Politics', 'Business', 'Arts', 'Education', 'Games & Hobbies', 'Health', 'Technology', 'Professional', 'Self-Help', 'Management & Marketing', 'Science & Medicine', 'Video Games', 'Kids & Family'];
    const dropdownArray = ['Alternative Health',
    'Training',
    'Other Games',
    'Regional',
    'Investing',
    'Spirituality',
    'National',
    'Hobbies',
    'Design',
    'Software How-To',
    'Places & Travel',
    'Kids & Family',
    'Tech News',
    'Literature',
    'Personal Journals',
    'Other',
    'Medicine',
    'College & High School',
    'Language Courses',
    'Government & Organizations',
    'Natural Sciences',
    'Amateur',
    'Fitness & Nutrition',
    'Performing Arts',
    'Islam',
    'Hinduism',
    'Aviation',
    'Buddhism',
    'Educational Technology',
    'Business News',
    'Gadgets',
    'Visual Arts',
    'Judaism',
    'Local',
    'Shopping',
    'Fashion & Beauty',
    'Outdoor',
    'History',
    'Non-Profit',
    'Podcasting',
    'K-12',
    'Social Sciences',
    'Automotive',
    'Sexuality',
    'Food',
    'Philosophy',
    'Higher Education'];

    const handleClick = (e) => {
      console.log('value: ' + e.target.value);
      setCategorySelection(e.target.value);
      // console.log('category selection: ' + categorySelection);
    }
    
    return (
      <div>
        {
          array.map((item, index) => {
            return(
              <input
                key={index}
                type="button"
                className="buttons"
                value={item}
                onClick={handleClick}
              />
            );
          })
        }
        {/* <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Active Item
      </Dropdown.Item> */}
      </div>
    );
  };

export default ButtonContainer;