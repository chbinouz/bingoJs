import styled from "styled-components";
import { Profile } from "../../components/profile/Profile";
import React, { useState, useCallback } from "react";
import axios from 'axios';
import {  useHistory } from "react-router-dom";






export const TaxProfileCard = (props) => {
  // eslint-disable-next-line
  const [profile, setProfile] = useState(props.profile);


 const history = useHistory();
 const handleOnClick = useCallback(() => history.go(0), [history]);
  const Delete = () => {
    axios.delete(`http://localhost:3001/tax/Deletehr/${profile._id}`)
    handleOnClick();
  
    console.log("done");
  }   
 
          
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
              <Profile profile={profile}></Profile>
            </div>
            
            <div className="modal-footer">
            <Btn>
            <button onClick={Delete}
                type="button"
                className="btn btn-secondary mr-4"
                data-dismiss="modal"
              >
                Remove
              </button>
              <button
                type="button"
                className="btn btn-secondary mr-4"
                data-dismiss="modal"
              >
                Close
              </button>
              
            

           
             
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