import styled from "styled-components";
import { BrowserRouter, Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "./sidebar.css";
import { BrowsePofiles } from "../pages/BrowseProfiles";

export const Sidebar = () => {
  // eslint-disable-next-line
  const history = useHistory();
  // eslint-disable-next-line
  const [error, setError] = useState({ visible: false, message: "" });
  // eslint-disable-next-line
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {},
  });

  return (
    <BrowserRouter basename="/">
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>BingoJs</h3>
          </div>

          <ul className="list-unstyled components">
            <p>HR agent</p>
            <li>
              <Link to="/hr/uploadCv">Upload CV</Link>
            </li>
            <li>
              <Link to=".">Account</Link>
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
                  <Link to="/hr/profiles">Web dev</Link>
                </li>
                <li>
                  <Link to="/profiles">mobile dev</Link>
                </li>
                <li>
                  <Link to="/profiles">Designer</Link>
                </li>
                <li>
                  <Button
                    href="."
                    data-toggle="modal"
                    data-target="#ModalWorkspace"
                  >
                    Click here to add folder
                  </Button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div
          className="modal fade"
          id="ModalWorkspace"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Folder's Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name && (
                      <FormError>{formik.errors.experience}</FormError>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Add Folder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <BrowsePofiles></BrowsePofiles>
        </div>
      </div>
    </BrowserRouter>
  );
};

const Button = styled.a`
  border-color: #6d7fcc;
  color: #444444;
  padding-left: 20px;
  background-color: #92a7ff;
  border-radius: 5px;
  &:hover {
    background-color: white !important;
    color: white;
    border-color: #6d7fcc;
  }
`;

const yupSchema = Yup.object({
  name: Yup.string(),
});

const FormError = styled.p`
  color: #f74b1b;
`;
