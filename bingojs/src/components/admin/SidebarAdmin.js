import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SidebarAdmin.css";
import { Input } from "@material-ui/core";
import $ from "jquery";

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
      <Link to={"/edit/" + props.agent._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteAgent(props.agent._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

class SidebarAdmin extends Component {
  constructor(props) {
    super(props);

    this.deleteAgent = this.deleteAgent.bind(this);

    this.state = {
      listeHr: [],
      searchName: "",
      searchfamilyName: "",
      searchemail: "",
    };
  }

  editSearchName = async (e) => {
    await this.setState({ searchName: e.target.value });

    /* await this.setState({listeHr:this.state.listeHr.filter(na => na.name.toLowerCase().includes(this.state.searchName.toLowerCase()))})
    console.log(this.state.searchName) */
  };

  dynamicSearch = () => {
    return this.state.listeHr
      .filter((na) =>
        na.name.toLowerCase().includes(this.state.searchName.toLowerCase())
      )
      .filter((na) =>
        na.familyName
          .toLowerCase()
          .includes(this.state.searchfamilyName.toLowerCase())
      )
      .filter((na) =>
        na.email.toLowerCase().includes(this.state.searchemail.toLowerCase())
      )
      .map((currentagent) => {
        return (
          <Agent
            agent={currentagent}
            deleteAgent={this.deleteAgent}
            key={currentagent._id}
          />
        );
      });
  };

  editSearchfamilyName = async (e) => {
    await this.setState({ searchfamilyName: e.target.value });
    /*this.setState({
      listeHr:this.state.listeHr.filter(na => na.familyName.toLowerCase().includes(this.state.searchfamilyName.toLowerCase()))
                  })*/
  };
  editSearchemail = async (e) => {
    await this.setState({ searchemail: e.target.value });
    /* this.setState({
      listeHr:this.state.listeHr.filter(na => na.email.toLowerCase().includes(this.state.searchemail.toLowerCase()))
                  })*/
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/hr/getHr")
      .then((response) => {
        this.setState({ listeHr: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteAgent(id) {
    axios.delete("http://localhost:3001/hr/deleteHr/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      listeHr: this.state.listeHr.filter((el) => el._id !== id),
    });
  }
  addAgent() {
    window.location = "/addhr";
  }

  List() {
    return this.state.listeHr.map((currentagent) => {
      return (
        <Agent
          agent={currentagent}
          deleteAgent={this.deleteAgent}
          key={currentagent._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>BingoJs</h3>
          </div>

          <ul className="list-unstyled components">
            <p>Admin</p>
            <li>
              <a href=".">Upload CV</a>
            </li>
            <li>
              <a href=".">Account</a>
            </li>
            <li>
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                WorkSpace
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href=".">Web dev</a>
                </li>
                <li>
                  <a href=".">mobile dev</a>
                </li>
                <li>
                  <a href=".">Designer</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-info"
                onClick={() => {
                  $("#sidebar, #content").toggleClass("active");
                  $(".collapse.in").toggleClass("in");
                  $("a[aria-expanded=true]").attr("aria-expanded", "false");
                }}
              >
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
            </div>
          </nav>
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
              <Link to={"/AddHr"}>
                <button type="button"> Add Agent </button>
              </Link>
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
        </div>
      </div>
    );
  }
}

export default SidebarAdmin;
