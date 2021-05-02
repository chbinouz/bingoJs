import { ResearchForm } from "../components/ResearchForm";
import { Profiles } from "./Profiles";
import $ from "jquery";
import { useState } from "react";
import { Infinite } from "../components/Infinite";
import styled from "styled-components";
export default function HrPage(props) {
  const [search, setSearch] = useState([]);
  const getProfiles = (url) => {
    setSearch(url);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Btn
            type="button"
            id="sidebarCollapse"
            className="btn btn-info "
            onClick={() => {
              $("#sidebar, #content").toggleClass("active");
              $(".collapse.in").toggleClass("in");
              $("a[aria-expanded=true]").attr("aria-expanded", "false");
            }}
          >
            <i className="fas fa-align-left"></i>
            <span>Toggle Sidebar</span>
          </Btn>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>

          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarSupportedContent"
          >
            <div className="search">
              <ResearchForm getProfiles={getProfiles}></ResearchForm>
            </div>
          </div>
        </div>
      </nav>
      <Profiles profiles={search}></Profiles>
    </>
  );
}

const Btn = styled.button`
  margin-top: -300px;
  @media (max-width: 990px) {
    margin-top: 0;
  }
`;
