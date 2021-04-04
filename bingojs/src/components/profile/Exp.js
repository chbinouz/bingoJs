import { useState } from "react";
import styled from "styled-components";

export const Exp = (props) => {
  // eslint-disable-next-line
  const [exp, setExp] = useState(props);
  return (
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
  );
};

const Ligne = styled.div`
  margin-top: 10px;
`;

const Wrapper = styled.div`
  border: 0.5px solid #d7d7d7;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
`;
