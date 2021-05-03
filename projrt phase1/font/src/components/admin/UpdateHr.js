import React, { Component } from "react";
import axios from "axios";

const initialState = {
  name: "",
  nameError: "",
  familyName: "",
  phoneNumber: 99999999,

  email: "",
  emailError: "",
  login: "",
  loginError: "",
  password: "",
  passwordError: "",
  img: "",
  history: "",
  role: "",
  roleError: "",
  users: [],
};

class UpdateHr extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangefamilyName = this.onChangefamilyName.bind(this);
    this.onChangephoneNumber = this.onChangephoneNumber.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangelogin = this.onChangelogin.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangeimg = this.onChangeimg.bind(this);
    this.onChangehistory = this.onChangehistory.bind(this);
    this.onChangerole = this.onChangerole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = initialState;
  }

  componentDidMount() {
    
    axios
      .get('http://localhost:3001/hr/getHr/'+ this.props.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          familyName: response.data.familyName,
          phoneNumber: response.data.phoneNumber,

          email: response.data.email,
          login: response.data.login,
          password: response.data.password,
          img: response.data.img,
          history: response.data.history,
          role: response.data.role,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  validate = () => {
    let nameError = "";
    let emailError = "";
    let loginError = "";
    let passwordError = "";
    let roleError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (this.state.login?.length < 8 || this.state.login?.length > 30) {
      loginError = "login must be between 8 and 30 characters";
    }
    if (!(this.state.role === "hr" || this.state.role === "admin")) {
      roleError = "role must be hr or admin";
    }
    if (this.state.password?.length < 8 || this.state.password?.length > 30) {
      passwordError = "Password must be between 8 and 30 characters";
    }

    if (emailError || nameError || loginError || passwordError || roleError) {
      this.setState({
        emailError,
        nameError,
        loginError,
        passwordError,
        roleError,
      });
      return false;
    }

    return true;
  };

  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangefamilyName(e) {
    this.setState({
      familyName: e.target.value,
    });
  }

  onChangephoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangelogin(e) {
    this.setState({
      login: e.target.value,
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeimg(e) {
    this.setState({
      img: e.target.value,
    });
  }
  onChangehistory(e) {
    this.setState({
      history: e.target.value,
    });
  }
  onChangerole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const HrAgent = {
      name: this.state.name,
      familyName: this.state.familyName,
      phoneNumber: this.state.phoneNumber,

      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
      img: this.state.img,
      history: this.state.history,
      role: this.state.role,
    };

    console.log(HrAgent);

    const isValid = this.validate();
    if (isValid) {
      axios
        .put(
          "http://localhost:3001/hr/updateHr/" + this.props.id,
          HrAgent
        )
        .then((res) => console.log(res.data));

      window.location = "/admin";
      // clear form
    }
  }

  render() {
    return (
      <div className="container">
        <h3>Edit user</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            />
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
          <div className="form-group">
            <label>familyName: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.familyName}
              onChange={this.onChangefamilyName}
            />
          </div>
          <div className="form-group">
            <label>phoneNumber: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.phoneNumber}
              onChange={this.onChangephoneNumber}
            />
          </div>

          <div className="form-group">
            <label>email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
            />
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
          <div className="form-group">
            <label>login: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.login}
              onChange={this.onChangelogin}
            />
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.loginError}
          </div>
          <div className="form-group">
            <label>password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangepassword}
            />
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
          <div className="form-group">
            <label>img: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.img}
              onChange={this.onChangeimg}
            />
          </div>
          <div className="form-group">
            <label>history: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.history}
              onChange={this.onChangehistory}
            />
          </div>
          <div className="form-group">
            <label>role: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.role}
              onChange={this.onChangerole}
            />
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.roleError}
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit user"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateHr;
