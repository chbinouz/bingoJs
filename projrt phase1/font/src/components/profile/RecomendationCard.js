import styled from "styled-components";

export const RecomendationCard = () => {
  return (
    <>
      <Wrapper>
        <div className="container-fluid">
          <Ligne className="row">
            <div className="col-6">
              <h6>Name :</h6>
            </div>
            <div className="col-6">
              <h6>souhayb ben rached</h6>
            </div>
          </Ligne>
          <Ligne className="row">
            <div className="col-6">
              <h6>Profile Title :</h6>
            </div>
            <div className="col-6">
              <h6>web developer</h6>
            </div>
          </Ligne>
          <Ligne className="row">
            <div className="col-6">
              <h6>location :</h6>
            </div>
            <div className="col-6">
              <h6>Tunisia</h6>
            </div>
          </Ligne>
          <hr></hr>
          <Ligne className="row">
            <div className="col-6">
              <a href="." className="btn btn-info">
                skip Profile
              </a>
            </div>
            <div className="col-6">
              <a href="." className="btn btn-outline-primary">
                skip Profile
              </a>
            </div>
          </Ligne>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  border-radius: 15px;
  display: flex;
  min-width: 300px;
  margin: 10px;
  padding: 20px;
`;

const Ligne = styled.div`
  margin-top: 10px;
`;
