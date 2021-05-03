import { useState } from "react";
import styled from "styled-components";

export const Education = (props) => {
  const [educ, setEduc] = useState(props.education);
  console.log("props");
  return (
    <Wrapper>
      <Ligne className="row">
        <div className="col-6">
          <h6>college name :</h6>
        </div>
        <div className="col-6">
          <h6>{educ.college_name}</h6>
        </div>
      </Ligne>
      <Ligne className="row">
        <div className="col-6">
          <h6>degree name :</h6>
        </div>
        <div className="col-6">
          <h6>{educ.degree_name}</h6>
        </div>
      </Ligne>
      <Ligne className="row">
        <div className="col-6">
          <h6>stream :</h6>
        </div>
        <div className="col-6">
          <h6>{educ.stream}</h6>
        </div>
      </Ligne>
      <Ligne className="row">
        <div className="col-6">
          <h6>degree year :</h6>
        </div>
        <div className="col-6">
          <h6>{educ.degree_year}</h6>
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
