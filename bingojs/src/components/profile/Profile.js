import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Educ } from "./Educ";
import { Exp } from "./Exp";
import { RecomendationCard } from "./RecomendationCard";
export const Profile = (props) => {
  const [profile, setProfile] = useState(props.profile);
  const [change, setChange] = useState(props.change);
  console.log(change);
  return (
    <div className="container-fluid">
      <h5>{change === "true" ? <h5>propably able to change</h5> : ""}</h5>

      <Image
        src={
          !profile.imgUrl
            ? "https://www.shareicon.net/data/512x512/2015/09/24/106423_user_512x512.png"
            : profile.imgUrl
        }
        className="rounded mx-auto d-block"
        alt={profile.name}
        title={profile.name}
      ></Image>
      <Ligne className="row justify-content-center ">
        <div className="col-5">
          <Title>Name :</Title>
        </div>
        <div className="col-5">
          <h6>{profile.name}</h6>
        </div>
      </Ligne>
      <Ligne className="row justify-content-center">
        <div className="col-5">
          <Title>Profile Title :</Title>
        </div>
        <div className="col-5">
          <h6>{profile.profile_title}</h6>
        </div>
      </Ligne>
      <Ligne className="row justify-content-center">
        <div className="col-5">
          <Title>location :</Title>
        </div>
        <div className="col-5">
          <h6>{profile.location}</h6>
        </div>
      </Ligne>
      <Ligne className="row justify-content-center">
        <div className="col-10">
          <Title>experience :</Title>
        </div>
      </Ligne>
      <Ligne className="row justify-content-center">
        <div className="col-12 col-md-9">
          {profile.experience?.map((exp, index) => (
            <div key={index}>
              <Exp experience={exp}></Exp>
            </div>
          ))}
        </div>
      </Ligne>
      <Ligne className="row justify-content-center">
        <div className="col-10">
          <Title>education :</Title>
        </div>
      </Ligne>
      <Ligne className="row justify-content-center">
        <div className="col-12 col-md-9">
          {profile.education?.map((edu, index) => (
            <div key={index}>
              <Educ edu={edu}></Educ>
            </div>
          ))}
        </div>
      </Ligne>
      <Ligne className="row justify-content-center ">
        <div className="col-12 col-md-9">
          <div className="card text-center">
            <div className="card-header">Similar profiles</div>
            <div className="card-body">
              <div className="row justify-content-center ">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <RecomendationCard></RecomendationCard>
                    </div>
                    <div className="carousel-item">
                      <RecomendationCard></RecomendationCard>
                    </div>
                    <div className="carousel-item">
                      <RecomendationCard></RecomendationCard>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Ligne>
    </div>
  );
};

const Ligne = styled.div`
  margin-top: 20px;
`;

const Title = styled.h6`
  font-weight: bold;
  color: #565555;
`;

const Image = styled.img`
  margin-bottom: 70px;
  margin-top: 20px;
  border-radius: 30px;
  width: 250px;
`;
const Wrapper = styled.div`
  border: 0.5px solid #d7d7d7;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
`;
