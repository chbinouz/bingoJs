import styled from "styled-components";

export const Education = () => {
  return (
    <Wrapper>
      <Ligne className="row">
        <div className="col-6">
          <h6>college name :</h6>
        </div>
        <div className="col-6">
          <h6>ENSI - Ecole Nationale des Sciences de l'Informatique</h6>
        </div>
      </Ligne>
      <Ligne className="row">
        <div className="col-6">
          <h6>degree name :</h6>
        </div>
        <div className="col-6">
          <h6>engeneer</h6>
        </div>
      </Ligne>
      <Ligne className="row">
        <div className="col-6">
          <h6>stream :</h6>
        </div>
        <div className="col-6">
          <h6>12</h6>
        </div>
      </Ligne>
      <Ligne className="row">
        <div className="col-6">
          <h6>degree year :</h6>
        </div>
        <div className="col-6">
          <h6>2010 – 2013</h6>
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
