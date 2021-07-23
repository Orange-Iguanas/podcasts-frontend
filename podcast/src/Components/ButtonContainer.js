import React from 'react';
// import { useState, useEffect } from 'react';
// import { useRef } from 'react';

function ButtonContainer({ categorySelection, setCategorySelection }) {
    // const categorySelection = useRef('');
    const array = [ 'Religion & Spirituality', 'Society & Culture', 'Comedy', 'Christianity', 'TV & Film', 'Music', 'Sports & Recreation', 'News & Politics', 'Business', 'Arts', 'Education', 'Games & Hobbies', 'Health', 'Technology', 'Professional', 'Self-Help', 'Management & Marketing', 'Science & Medicine', 'Video Games', 'Kids & Family'];

    const handleClick = (e) => {
      console.log('value: ' + e.target.value);
      setCategorySelection(e.target.value);
      console.log('category selection: ' + categorySelection);
    }
    
    return (
      <div>
        {
          array.map((item, index) => {
            return(
              <input
                key={index}
                type="button"
                value={item}
                onClick={handleClick}
              />
            );
          })
        }
      </div>
    );
  };

export default ButtonContainer;