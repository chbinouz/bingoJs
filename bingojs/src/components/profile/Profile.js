import { useState } from "react";
import styled from "styled-components";
import { object } from "yup";
import { Education } from "./Education";
import { RecomendationCard } from "./RecomendationCard";
export const Profile = (props) => {
  // eslint-disable-next-line
  var prf = new object();
  prf = props.profile;
  // eslint-disable-next-line
  const [profile, setProfile] = useState(prf);
  return (
    <div className="container-fluid">
      <Image
        src={
          profile.imgUrl
            ? profile.imgUrl
            : "https://www.shareicon.net/data/512x512/2015/09/24/106423_user_512x512.png"
        }
        className="rounded mx-auto d-block"
        alt="..."
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
          {profile.experience.map((exp) => (
            <Wrapper>
              <Ligne className="row">
                <div className="col-6">
                  <h6>job title :</h6>
                </div>
                <div className="col-6">
                  <h6>{exp.job_title}</h6>
                </div>
              </Ligne>
              <Ligne className="row">
                <div className="col-6">
                  <h6>company name :</h6>
                </div>
                <div className="col-6">
                  <h6>{exp.company_name}</h6>
                </div>
              </Ligne>
              <Ligne className="row">
                <div className="col-6">
                  <h6>joining date :</h6>
                </div>
                <div className="col-6">
                  <h6>{exp.joining_date}</h6>
                </div>
              </Ligne>
              <Ligne className="row">
                <div className="col-6">
                  <h6>exp :</h6>
                </div>
                <div className="col-6">
                  <h6>{exp.exp}</h6>
                </div>
              </Ligne>
              <Ligne className="row">
                <div className="col-6">
                  <h6>location :</h6>
                </div>
                <div className="col-6">
                  <h6>{exp.location}</h6>
                </div>
              </Ligne>
            </Wrapper>
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
          <Education></Education>
        </div>
      </Ligne>
      <Ligne className="row justify-content-center ">
        <div className="card text-center">
          <div className="card-header">Similar profiles</div>
          <div className="card-body">
            <div className="row">
              <div
                id="carouselExampleControls"
                className="carousel slide col-12"
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
                  />
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
                  />
                  <span className="sr-only">Next</span>
                </a>
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
