import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import Spinner from 'react-bootstrap/Spinner'
import $ from "jquery";

// or less ideally
//import { Button } from 'react-bootstrap';
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import axios from "axios";
import "./UploadCv.css";
import resume from "../asserts/resume.jpg";
import { ResearchForm } from "../components/ResearchForm";
import styled from "styled-components";

function FileUpload() {
  const [file, setFile] = useState(""); // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const [preview, setPreview] = useState({ prev: {} });
  const [result, setResult] = useState({ data: {} });
  const [show, setShow] = useState(false);
  const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
  };
  const uploadFile = () => {
    setShow(true);
    const formData = new FormData();
    formData.append("file", file); // appending file
    axios.post("http://localhost:3001/cv/upload", formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            "%";
          setProgess(progress);
        },
      })
      .then((res) => {
        console.log(res.data);
        setPreview({ prev:null});
        setResult({ data: res.data });
        getFile({
          name: res.data.name,
          path: "http://localhost:3001" + res.data.path,
        });
        const fieldsPreview = {
          name: res.data.NAME,
          company: res.data.COMPANIES_WORKED_AT,
        };
        //sending name + company to flask api to get the linkedIn profile
        axios.post(`http://127.0.0.1:5000/singleScrap/${res.data.NAME.replace(" ", "_")}`)
        .then((rest)=>{
          //testing if the scraping finish
          console.log(`aaaaaaaaaaaa${rest.data}`)
          if(rest.data==='Hello World!'){
            console.log('je suis dans if')
            const name={name:fieldsPreview.name}
            console.log('je suis dans if'+name)
            //if scrapping finished i well get the profile from the backend
            axios.post("http://localhost:3001/cv/preview",name)
            .then((result) => {
              //console.log(result.data[0])
              setPreview({ prev: result.data[0] });
              console.log(preview.prev);
            })
            .catch((err) => {
              console.error(err);
            });
          }
        })

        
      })
      .catch((err) => console.log(err));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Btn
          type="button"
          id="sidebarCollapse"
          className="btn btn-info "
          onClick={() => {
            $("#sidebar, #content").toggleClass("active");
            $(".collapse.in").toggleClass("in");
            $("a[aria-expanded=true]").attr("aria-expanded", "false");
          }}
        >
          <i className="fas fa-align-left"></i>
          <span>Toggle Sidebar</span>
        </Btn>
      </nav>
      <Wrapper className="container-fluid">
        <div>
          <form className="md-form">
            <div className="">
              <div className="">
                <img
                  src={resume}
                  className="img-fluid"
                  height={150}
                  width={500}
                  style={{ alignSelf: "center" }}
                  alt="example placeholder"
                />
              </div>
              <Form className="md-form file" action="#">
                <div className="file-field">
                  <div className="btn btn-primary btn-sm file-field">
                    <span>Choose files</span>
                    <input type="file" onChange={handleChange} multiple />
                  </div>
                </div>
              </Form>
            </div>
          </form>

          {/*<div className="progessBar" style={{ width: progress }}>
                   {progress!=0&&progress}
        </div>*/}
          <Button
            variant="primary"
            className="classButton"
            onClick={uploadFile}
          >
            CONDIDATE INFORMATION
          </Button>
          {(result.data || preview.prev)&&(
            <Modal 
              show={show}
              onHide={handleClose}
              dialogClassName="modal-xl"
              aria-labelledby="example-custom-modal-styling-title"
            > 
              <Modal.Header closeButton>
                <Modal.Title>
                  {" "}
                  <label className="text-center">
                    CONDIDATE INFORMATION
                  </label>{" "}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CardGroup>
        
                    <Card>
                      <Card.Header>CV RESUME</Card.Header>
                      {result.data ?(<ListGroup variant="flush">
                        {result.data.NAME && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">Name: </label>{" "}
                            {result.data.NAME}
                          </ListGroup.Item>
                        )}
                        {result.data.EMAIL_ADDRESS && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              Email Adress:{" "}
                            </label>
                            {result.data.EMAIL_ADDRESS}
                          </ListGroup.Item>
                        )}
                        {result.data.LOCATION && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              Location:{" "}
                            </label>{" "}
                            {result.data.LOCATION}
                          </ListGroup.Item>
                        )}
                        {result.data.GRADUATION_YEAR && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              Graduation Year:{" "}
                            </label>{" "}
                            {result.data.GRADUATION_YEAR}
                          </ListGroup.Item>
                        )}
                        {result.data.COLLEGE_NAME && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              College Name :{" "}
                            </label>{" "}
                            {result.data.COLLEGE_NAME}
                          </ListGroup.Item>
                        )}
                        {result.data.DESIGNATION && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              Designation :{" "}
                            </label>{" "}
                            {result.data.DESIGNATION}
                          </ListGroup.Item>
                        )}
                        {result.data.COMPANIES_WORKED_AT && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              Company :{" "}
                            </label>{" "}
                            {result.data.COMPANIES_WORKED_AT}
                          </ListGroup.Item>
                        )}
                        {result.data.DEGREE && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              Degree :{" "}
                            </label>{" "}
                            {result.data.DEGREE}
                          </ListGroup.Item>
                        )}
                      </ListGroup>):(<div className="d-flex justify-content-center"><ListGroup >
                                            <Spinner animation="border" role="status">
                                                   
                                            </Spinner>
                                            <span className="sr-onl">Profile LinkedIn Loading ...</span>
                                        </ListGroup></div>)}
                    </Card>
                  
                    <Card> 
                      <Card.Header>LinkedIn Profile</Card.Header>
                      {preview.prev?(<ListGroup variant="flush">
                        {preview.prev.name && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              Name :{" "}
                            </label>{" "}
                            {preview.prev.name}
                          </ListGroup.Item>
                        )}
                        {preview.prev.location && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              Location :{" "}
                            </label>{" "}
                            {preview.prev.location}
                          </ListGroup.Item>
                        )}
                        {preview.prev.profile_title && (
                          <ListGroup.Item>
                            <label className="font-weight-bolder">
                              Profile Title :{" "} 
                            </label>{" "}
                            {preview.prev.profile_title}
                          </ListGroup.Item>
                        )}
                        {preview.prev.experience && (
                          <ListGroup.Item>
                            {preview.prev.experience &&
                              preview.prev.experience.map((exp, index) => (
                                <ul>
                                  <label className="p-3 mb-2 bg-info text-white">
                                    Experience {index + 1} :{" "}
                                  </label>{" "}
                                   <li key={index}><label className="font-weight-bolder">
                                    job title :{" "}
                                  </label>{exp.job_title}</li>{" "}
                                  <li key={index}><label className="font-weight-bolder">
                                    company name :{" "}
                                  </label>{exp.company_name}</li>
                                  <li key={index}><label className="font-weight-bolder">
                                    joining date :{" "}
                                  </label>{exp.joining_date}</li>
                                  <li key={index}><label className="font-weight-bolder">
                                    experience duration :{" "}
                                  </label>{exp.exp}</li>
                                  <li key={index}><label className="font-weight-bolder">
                                    location :{" "}
                                  </label>{exp.location}</li>
                                </ul>
                              ))}
                          </ListGroup.Item>
                        )}
                        {preview.prev.education && (
                          <ListGroup.Item>
                            {preview.prev.education &&
                              preview.prev.education.map((edu, index) => (
                                <ul>
                                  <label className="p-3 mb-2 bg-info text-white">
                                    Education {index + 1} :{" "}
                                  </label>
                                  <li key={index}><label className="font-weight-bolder">
                                    college name :{" "}
                                  </label>{edu.college_name}</li>{"font-weight-bolder"}
                                  <li key={index}><label className="font-weight-bolder">
                                    degree name :{" "}
                                  </label>{edu.degree_name}</li>
                                  <li key={index}>
                                    <label className="font-weight-bolder">
                                    degree year :{" "}
                                    </label>
                                          {edu.degree_year}
                                  </li>
                                </ul>
                              ))}
                          </ListGroup.Item>
                        )}
                      </ListGroup>):(<div className="d-flex justify-content-center"><ListGroup >
                                            <Spinner animation="border" role="status">
                                                   
                                            </Spinner>
                                            <span className="sr-onl">Profile LinkedIn Loading ...</span>
                                        </ListGroup></div>)}
                    </Card>
                </CardGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
export default FileUpload;

const Btn = styled.button``;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Form = styled.form`
  width: 100%;
`;
