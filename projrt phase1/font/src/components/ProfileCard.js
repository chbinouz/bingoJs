import styled from "styled-components";
import { Profile } from "./profile/Profile";
import React, { useState } from "react";
import axios from "axios";
import Dropdown from 'react-multilevel-dropdown';

export const ProfileCard = (props) => {
  const [change, setChange] = useState([]);
  const [profile, setProfile] = useState(props.profile);
  const [loadData, setLoadData] = useState(true);

  const fetchData = (id) => {
    axios
      .get("http://localhost:3001/profiles/ableToChange/" + id)
      .then((res) => {
        console.log(res.data);
        setChange(res.data.able_for_change);
        setLoadData(false);
      })
      .catch((err) => console.log(err));
  };

  //Adding Profiles
  const addProfiles = () => {
    axios.post("http://localhost:3001/profile/Addhr", profile)
  console.log(profile)} 


const addFrontProfiles = () => {
    axios.post("http://localhost:3001/front/Addhr", profile)
  console.log(profile)} 

const addFullStackProfiles = () => {
    axios.post("http://localhost:3001/fullstack/Addhr", profile)
  console.log(profile)}         

const addUxProfiles = () => {
    axios.post("http://localhost:3001/ux/Addhr", profile)
  console.log(profile)} 
   
const addGraphicProfiles = () => {
    axios.post("http://localhost:3001/graphic/Addhr", profile)
  console.log(profile)} 
  
const addWebProfiles = () => {
    axios.post("http://localhost:3001/web/Addhr", profile)
  console.log(profile)} 
  
const addVideoProfiles = () => {
    axios.post("http://localhost:3001/video/Addhr", profile)
  console.log(profile)}         
  
const addSemProfiles = () => {
    axios.post("http://localhost:3001/sem/Addhr", profile)
  console.log(profile)}  
  
const addSeoProfiles = () => {
    axios.post("http://localhost:3001/seo/Addhr", profile)
  console.log(profile)}          
  
const addMarketingProfiles = () => {
    axios.post("http://localhost:3001/marketing/Addhr", profile)
  console.log(profile)}          

const addMarketProfiles = () => {
    axios.post("http://localhost:3001/market/Addhr", profile)
  console.log(profile)}          

const addContentProfiles = () => {
    axios.post("http://localhost:3001/content/Addhr", profile)
  console.log(profile)} 

const addTranslatorsProfiles = () => {
    axios.post("http://localhost:3001/translators/Addhr", profile)
  console.log(profile)}          
  

const addEditorsProfiles = () => {
    axios.post("http://localhost:3001/editors/Addhr", profile)
  console.log(profile)} 
  
const addCopyProfiles = () => {
    axios.post("http://localhost:3001/copy/Addhr", profile)
  console.log(profile)}    
  
const addVirtualProfiles = () => {
    axios.post("http://localhost:3001/virtual/Addhr", profile)
  console.log(profile)} 

const addDataEntryProfiles = () => {
    axios.post("http://localhost:3001/dataentry/Addhr", profile)
  console.log(profile)}    
  
const addProjectManagersProfiles = () => {
    axios.post("http://localhost:3001/projectmanagers/Addhr", profile)
  console.log(profile)}    
  
const addTechProfiles = () => {
    axios.post("http://localhost:3001/tech/Addhr", profile)
  console.log(profile)}
  
const addAccountantsProfiles = () => {
    axios.post("http://localhost:3001/accountants/Addhr", profile)
  console.log(profile)}      

const addFinancialProfiles = () => {
    axios.post("http://localhost:3001/financial/Addhr", profile)
  console.log(profile)}   
  
const addtaxProfiles = () => {
    axios.post("http://localhost:3001/tax/Addhr", profile)
  console.log(profile)}  
  
const addFinancialModelersProfiles = () => {
    axios.post("http://localhost:3001/financialmodelers/Addhr", profile)
  console.log(profile)}  
  //End Of Adding Profiles
  return (
    <>
      <Wrapper>
        <div className="container-fluid">
          <Ligne className="row">
            <Image
              src={
                profile.imgUrl
                  ? profile.imgUrl
                  : "https://www.shareicon.net/data/512x512/2015/09/24/106423_user_512x512.png"
              }
              className="mx-auto d-block"
              alt={profile.name}
            />
          </Ligne>
          <Ligne className="row">
            <div className="col-6">
              <h6>Name :</h6>
            </div>
            <div className="col-6">
              <h6>{profile.name}</h6>
            </div>
          </Ligne>
          <Ligne className="row">
            <div className="col-6">
              <h6>Profile Title :</h6>
            </div>
            <div className="col-6">
              <h6>{profile.profile_title}</h6>
            </div>
          </Ligne>
          <Ligne className="row">
            <div className="col-6">
              <h6>location :</h6>
            </div>
            <div className="col-6">
              <h6>{profile.location}</h6>
            </div>
          </Ligne>
          <hr></hr>
          <Ligne className="row">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={"#" + profile._id}
                onClick={() => {
                  fetchData(profile._id);
                  console.log(change);
                }}
              >
                View profile
              </button>
            </div>
            <div className="col-6">
              <Button href="." className="btn btn-outline-primary">
                skip Profile
              </Button>
            </div>
          </Ligne>
        </div>
      </Wrapper>

      <div
        className="modal fade"
        id={profile._id}
        tabIndex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
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
              {!loadData ? (
                <Profile profile={profile} change={change}></Profile>
              ) : (
                "loading"
              )}
            </div>
            <div className="modal-footer">
            <Btn>
              <button
                type="button"
                className="btn btn-secondary mr-4"
                data-dismiss="modal"
              >
                Close
              </button>
              <Dropdown
  title='Add'
>
  <Dropdown.Item
    
  >
    Development & IT
    <Dropdown.Submenu>
    <Dropdown.Item onClick={addFrontProfiles}>
      Front-End Developpers
    </Dropdown.Item>
    <Dropdown.Item onClick={addProfiles}>
      Back-End Developpers
    </Dropdown.Item>
    <Dropdown.Item onClick={addFullStackProfiles}>
      FullStack Developpers
    </Dropdown.Item>
  </Dropdown.Submenu>
  </Dropdown.Item>
 
    
  <Dropdown.Item>
    Design & Creative 
    <Dropdown.Submenu>
      <Dropdown.Item onClick={addUxProfiles}>
      UX/UI Designers
      </Dropdown.Item>
      <Dropdown.Item onClick={addGraphicProfiles}>
      Graphic Designers
      </Dropdown.Item>
      <Dropdown.Item onClick={addWebProfiles}>
      Web Designers
      </Dropdown.Item>
      <Dropdown.Item onClick={addVideoProfiles}>
      Video Editors
      </Dropdown.Item>
    </Dropdown.Submenu>
  </Dropdown.Item>
  <Dropdown.Item>
    Sales & Marketing 
    <Dropdown.Submenu>
      <Dropdown.Item onClick={addSemProfiles}>
      SEM Specialists
      </Dropdown.Item>
      <Dropdown.Item onClick={addSeoProfiles}>
      SEO Specialists
      </Dropdown.Item>
      <Dropdown.Item onClick={addMarketingProfiles}>
      Marketing Analysts
      </Dropdown.Item>
      <Dropdown.Item onClick={addMarketProfiles}>
      Market Researchers
      </Dropdown.Item>
    </Dropdown.Submenu>
  </Dropdown.Item>
  <Dropdown.Item>
    Writing & Translation 
    <Dropdown.Submenu>
      <Dropdown.Item onClick={addContentProfiles}>
      Content Writers
      </Dropdown.Item>
      <Dropdown.Item onClick={addTranslatorsProfiles}>
      Translators
      </Dropdown.Item>
      <Dropdown.Item onClick={addEditorsProfiles}>
      Editors
      </Dropdown.Item>
      <Dropdown.Item onClick={addCopyProfiles}>
      CopyWriters
      </Dropdown.Item>
    </Dropdown.Submenu>
  </Dropdown.Item>
  <Dropdown.Item>
  Admin & Customer Support 
    <Dropdown.Submenu>
      <Dropdown.Item onClick={addVirtualProfiles}>
      Virtual Assistants
      </Dropdown.Item>
      <Dropdown.Item onClick={addDataEntryProfiles}>
      Data Entry Specialistss
      </Dropdown.Item>
      <Dropdown.Item onClick={addProjectManagersProfiles}>
      Project Managers
      </Dropdown.Item>
      <Dropdown.Item onClick={addTechProfiles}>
      Tech Support Specialists
      </Dropdown.Item>
    </Dropdown.Submenu>
  </Dropdown.Item>
  <Dropdown.Item>
  Finance & Accounting 
    <Dropdown.Submenu>
      <Dropdown.Item onClick={addAccountantsProfiles}>
      Accountants
      </Dropdown.Item>
      <Dropdown.Item onClick={addFinancialProfiles}>
      Financial Analysts
      </Dropdown.Item>
      <Dropdown.Item onClick={addtaxProfiles}>
      Tax Consultants
      </Dropdown.Item>
      <Dropdown.Item onClick={addFinancialModelersProfiles}>
      Financial Modelers
      </Dropdown.Item>
    </Dropdown.Submenu>
  </Dropdown.Item>
</Dropdown>

           
             
</Btn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Wrapper = styled.div`
  border-radius: 15px;
  display: flex;
  width: 380px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 0;
`;

const Button = styled.a`
  border-color: #6d7fcc;
  color: #6d7fcc;
  &:hover {
    background-color: #6d7fcc !important;
    color: white;
    border-color: #6d7fcc;
  }
`;

const Ligne = styled.div`
  margin-top: 10px;
`;

const Image = styled.img`
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 100%;
  width: 150px;
`;
const Btn = styled.div`
display: flex;
margin: auto;
`
