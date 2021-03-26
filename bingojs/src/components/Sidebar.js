import { Profiles } from "../pages/Profiles";
import { ResearchForm } from "./ResearchForm";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>BingoJs</h3>
        </div>

        <ul className="list-unstyled components">
          <p>Mariem Hammami</p>
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
              className="btn btn-info buttonToggle"
            >
              <i className="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
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
                <ResearchForm></ResearchForm>
              </div>
            </div>
          </div>
        </nav>
        <Profiles></Profiles>
      </div>
    </div>
  );
};
