import styled from "styled-components";

export const ProfileCard = () => {
  return (
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
            <Button href="." className="btn btn-outline-primary">
              Add Profile
            </Button>
          </div>
          <div className="col-6">
            <Button href="." className="btn btn-outline-primary">
              skip Profile
            </Button>
          </div>
        </Ligne>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 15px;
  display: flex;
  min-width: 300px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
