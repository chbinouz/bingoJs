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
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#Modal"
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
