import React from 'react';

import onlineIcon from '../../../icons/onlineIcon.png';


import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Focus on being productive instead of busy <span role="img" aria-label="emoji">💬</span></h1>
      <h2>“Teamwork makes the dream work.” <span role="img" aria-label="emoji">❤️</span></h2>
    
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;