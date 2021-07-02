import React from 'react';
import sampledata from '../Models/sampledata.js';

function Podcasts() {
    return (
      <div className="App">
        <h1>Podcasts</h1>
            <div>
                <h2>Recommended Podcasts</h2>
                <div className="results">
                { sampledata 
                    ?  sampledata.map((sample, index) => {
                      return (
                        <div className="podcastsgroup">
                            <div className="images">
                            <img
                            width={200}
                            height={200}
                            src={sample.image}/>
                            </div>
                            <h5>{sample.title}</h5>
                            <h5>{sample.author}</h5>
                            <h6>{sample.categories}</h6>
                            <div>{sample.description}</div>
                            <a href={sample.website}>View Website</a>
                        {console.log(sample)}
                      </div>
                    )
                  })
                  : <p>Try Again</p>
                }
              </div>
            </div>
      </div>
    );
  };

export default Podcasts;