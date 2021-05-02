import styled from "styled-components";
import { BrowserRouter, Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "./sidebar.css";
import { BrowsePofiles } from "../pages/BrowseProfiles";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import { isAuthenticated } from './../auth/helpers'
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import axios from "axios";


export const Sidebar = () => {
  const [chatbot,setChatbot]=useState(true)
  const [showModal, setShowModal] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [folders, setFolders] = useState([]);

  // eslint-disable-next-line
  const history = useHistory();
  // eslint-disable-next-line
  const [error, setError] = useState({ visible: false, message: "" });
  // eslint-disable-next-line
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {},
  });
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

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const getFolders = () => {
    axios.get("http://localhost:3001/folder")
      .then((response) => {
        console.log(response)
        setFolders(response.data.message);
      })
  };

  const handleSubmit = () => {
    console.log(folderName);
    const folder = { name: formik.values.name };
    axios.post("http://localhost:3001/folder", folder).then((res) => {
      if (res.status) {
        getFolders();
        handleCloseModal();
      }
      console.log(res);
    })
  }
  useEffect(() => {
    getFolders()
  },[]);
  return (
    <BrowserRouter basename="/hr">
      <div className="Chatbot" style={{padding:"0"}}>
        <div style={{padding:"0",cursor:"pointer"}}  onClick={()=> setChatbot((prevstate)=> !prevstate)}>
       <img style={{height:"80px",width:"80px"}} src="https://cdn.iconscout.com/icon/free/png-256/robot-130-530368.png"  /></div>
       {chatbot ? (<Chatbot
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
              <Link to="/hr/uploadCv">Upload CV</Link>
            </li>
            <li>
              <Link to="/">LinkedIn Profiles</Link>
            </li>
            <li>
              <Link to="/Calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/join">Join Chat</Link>
            </li>
            <li>
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                WorkSpace
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link to="/hr/DevelopmentAndIT">Development & IT</Link>
                </li>
                <li>
                  <Link to="/hr/DesignAndCreative">Design & Creative</Link>
                </li>
                <li>
                  <Link to="/hr/SalesAndMarketing">Sales & Marketing</Link>
                </li>
                <li>
                  <Link to="/hr/WritingAndTranslation">
                    Writing & Translation
                  </Link>
                </li>
                <li>
                  <Link to="/hr/AdminAndCustomerSupport">
                    Admin & Customer Support
                  </Link>
                </li>
                <li>
                  <Link to="/hr/FinanceAndAccounting">
                    Finance & Accounting
                  </Link>
                </li>
                <li>
                {
                  folders.map((item) => {
                    return (
                      <li>
                        <a href=".">{item.name}</a>
                      </li>);
                  })
                }
                  <Button
                    href="."
                    data-toggle="modal"
                    data-target="#ModalWorkspace"
                  
                  >
                    Click here to add folder
                  </Button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div
          className="modal fade"
          id="ModalWorkspace"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Folder's Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name && (
                      <FormError>{formik.errors.experience}</FormError>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={handleSubmit}
                    >
                      Add Folder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <BrowsePofiles></BrowsePofiles>
        </div>
      </div>
    </BrowserRouter>
  );
};

const Button = styled.a`
  border-color: #6d7fcc;
  color: #444444;
  padding-left: 20px;
  background-color: #92a7ff;
  border-radius: 5px;
  &:hover {
    background-color: white !important;
    color: white;
    border-color: #6d7fcc;
  }
`;

const yupSchema = Yup.object({
  name: Yup.string(),
});

const FormError = styled.p`
  color: #f74b1b;
`;
