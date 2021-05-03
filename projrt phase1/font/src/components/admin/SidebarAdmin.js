import React, { Component, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import config from "../config";
import Chatbot from "react-chatbot-kit";
import "./SidebarAdmin.css";
import MessageParser from '../chatbot/MessageParser'
import ActionProvider from '../chatbot/ActionProvider'
import $ from "jquery";
import { BrowseAdmin } from "./BrowseAdmin";
import { isAuthenticated } from '../../auth/helpers'


class SidebarAdmin extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      chatbot: false,
    };
  }
 
  render() {
    const { user, token } = isAuthenticated();
   
    const signout = () => {

      fetch("http://localhost:3001/auth/signout")
        .then(() => {
          toastr.info('User SignOut', 'Next Time', {
              positionClass: "toast-bottom-right",
          })
          localStorage.removeItem('jwt_info')
          window.location = "/signin";
        }) 
        .catch()

  }
  
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };
    return (
      <BrowserRouter basename="/admin">
      <div className="Chatbot" style={{padding:"0",position:"fixed",bottom:"10px",right:"-100px"}}>
        <div style={{padding:"0",cursor:"pointer"}}  onClick={() => {
          this.setState(prevState => ({
            chatbot: !prevState.chatbot,
          }));
        }}>
       <img style={{height:"80px",width:"80px"}} src="https://cdn.iconscout.com/icon/free/png-256/robot-130-530368.png"  /></div>
       {this.state.chatbot ? (<Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        saveMessages={saveMessages}
        messageHistory={loadMessages()}
      />):(<></>)}
      </div>
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>BingoJs</h3>
              <span className="nav-link" style={{ cursor: 'pointer' }} onClick={signout}>SignOut</span>
            </div> 
            <ul className="list-unstyled components">
              <p>{user.name}</p>
              <li>
                <Link to="/">configure accounts</Link>
              </li>
              <li>
                <Link to="/scrapping">Configure Scrapping</Link>
              </li>
              <li>
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  {" "}
                  WorkSpace
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href=".">Web dev</a>
                  </li>
                  <li>
                    <a href=".">mobile dev</a>
                  </li>
                  <li>
                    <a href=".">Designer</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div id="content">
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
            <BrowseAdmin></BrowseAdmin>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default SidebarAdmin;
