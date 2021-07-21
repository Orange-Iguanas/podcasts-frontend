import React from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

function ButtonContainer() {
    // const categorySelection = useRef('');
    const array = [ 'Religion & Spirituality', 'Society & Culture', 'Comedy', 'Christianity', 'TV & Film', 'Music', 'Sports & Recreation', 'News & Politics', 'Business', 'Arts', 'Education', 'Games & Hobbies', 'Health', 'Technology', 'Professional', 'Self-Help', 'Management & Marketing', 'Science & Medicine', 'Video Games', 'Kids & Family'];

    useEffect(() => {
    },[]);
    
    return (
      <div className="App">
        {
          array.map((item) => {
            return(
              <input type="button" value={item}
            //   onClick={
            //     categorySelection(item)
            //   }
            />
            );
          })
        }
      </div>
    );
  };

export default ButtonContainer;