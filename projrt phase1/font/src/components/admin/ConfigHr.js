import React, { Component, useState } from "react";
import { Input } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "../../../node_modules/react-bootstrap/Button";
import Modal from "../../../node_modules/react-bootstrap/Modal";
import axios from "axios";
import AddHr from "./AddHr";
import UpdateHr from "./UpdateHr";
import { isAuthenticated } from '../../auth/helpers'

function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"> Add Hr </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <AddHr></AddHr>{" "}
      </Modal.Body>
      <Modal.Footer>
        {" "}
        <Button onClick={props.onHide}>Close</Button>{" "}
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {" "}
          Update Hr{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <UpdateHr id={props.updateid}></UpdateHr>{" "}
      </Modal.Body>
      <Modal.Footer>
        {" "}
        <Button onClick={props.onHide}>Close</Button>{" "}
      </Modal.Footer>
    </Modal>
  );
}

const Agent = (props) => (
  <tr>
    <td>{props.agent.name}</td>
    <td>{props.agent.familyName}</td>
    <td>{props.agent.email}</td>
    <td>{props.agent.phoneNumber}</td>
    <td>{props.agent.login}</td>
    <td>{props.agent.history}</td>
    <td>{props.agent.role}</td>
    <td>
      <Button
        variant="dark"
        onClick={() => {
          props.updateModal(props.agent._id);
        }}
      >
        Edit
      </Button>
      <Button
        variant="dark"
        onClick={() => {
          props.deleteAgent(props.agent._id);
        }}
      >
        Delete
      </Button>
    </td>
  </tr>
);






class ConfigHr extends Component {
  constructor(props) {
    super(props);

    this.deleteAgent = this.deleteAgent.bind(this);
    this.updateModal = this.updateModal.bind(this);

    this.state = {
      listeHr: [],
      searchName: "",
      searchfamilyName: "",
      searchemail: "",
      modalShow: false,
      modalShow2: false,
      updateid: props.updateid,
    };
  }

  updateModal = async (id) => {
    await this.setState({ updateid: id });
    await this.setState({ modalShow2: true });
  };

  editSearchName = async (e) => {
    await this.setState({ searchName: e.target.value });
  };

  dynamicSearch = () => {
    return this.state.listeHr
      .filter((na) =>
        na.name?.toLowerCase().includes(this.state.searchName?.toLowerCase())
      )
      .filter((na) =>
        na.familyName
          .toLowerCase()
          .includes(this.state.searchfamilyName?.toLowerCase())
      )
      .filter((na) =>
        na.email?.toLowerCase().includes(this.state.searchemail?.toLowerCase())
      )
      .map((currentagent) => {
        return (
          <Agent
            agent={currentagent}
            deleteAgent={this.deleteAgent}
            updateModal={this.updateModal}
            key={currentagent._id}
            updateid={this.state.updateid}
          />
        );
      });
  };

  editSearchfamilyName = async (e) => {
    await this.setState({ searchfamilyName: e.target.value });
  };

  editSearchemail = async (e) => {
    await this.setState({ searchemail: e.target.value });
  };

  componentDidMount() {
    const { user, token } = isAuthenticated();

    axios
      .get("http://localhost:3001/hr/getHr",{headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }})
      .then((response) => {
        console.log(response.data)
        this.setState({ listeHr:response.data });
        console.log(this.state.listeHr)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteAgent(id) {
    axios
      .delete("http://localhost:3001/hr/deleteHr/" + id)
      .then((response) => {});

    this.setState({
      listeHr: this.state.listeHr.filter((el) => el._id !== id),
    });
  }
  List() {
    return this.state.listeHr.map((currentagent) => {
      return (
        <Agent
          updateid={this.state.updateid}
          id={currentagent._id}
          agent={currentagent}
          deleteAgent={this.deleteAgent}
          updateModal={this.updateModal}
          key={currentagent._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <h3>HrAgents List</h3>
        <input
          type="text"
          value={this.state.searchName}
          onChange={this.editSearchName.bind(this)}
          placeholder="Search for a name!"
        />
        <input
          type="text"
          value={this.state.searchfamilyName}
          onChange={this.editSearchfamilyName}
          placeholder="Search for a familyname!"
        />
        <input
          type="text"
          value={this.state.searchemail}
          onChange={this.editSearchemail}
          placeholder="Search for email!"
        />
        <div className="mybtnAdd">
          <Button
            variant="dark"
            onClick={() => this.setState({ modalShow: true })}
          >
            {" "}
            Add New Hr
          </Button>
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
          />
          <MyVerticallyCenteredModal2
            updateid={this.state.updateid}
            id={this.state.updateid}
            show={this.state.modalShow2}
            onHide={() => this.setState({ modalShow2: false })}
          />
        </div>
        <br></br>
        <br></br>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>name</th>
              <th>familyName</th>
              <th>email</th>
              <th>phoneNumber</th>
              <th>login</th>
              <th>history</th>
              <th>role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.dynamicSearch()}</tbody>
        </table>
      </div>
    );
  }
}
export default ConfigHr;
