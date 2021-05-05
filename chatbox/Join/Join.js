import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import $ from "jquery";
import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


  useEffect(() => {
    const jwt = localStorage.getItem('jwt_info');
    var idConnected=''
if(jwt) {
  idConnected = JSON.parse(jwt).user.name
 setName(idConnected)
}
  });

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-info"
            onClick={() => {
              $("#sidebar, #content").toggleClass("active");
              $(".collapse.in").toggleClass("in");
              $("a[aria-expanded=true]").attr("aria-expanded", "false");
            }}
          >
            <i className="fas fa-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>
        </div>
      </nav>
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" value={name} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join Room</button>
        </Link>
      </div>
    </div>
    </>
  );
}
