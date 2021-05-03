//import { ResearchForm } from "../ResearchForm";
import { FrontProfiles } from "../../components/foldercontent/FrontProfiles";
import $ from "jquery";
function FrontEnd() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-info buttonToggle"
            onClick={() => {
              $("#sidebar, #content").toggleClass("active");
              $(".collapse.in").toggleClass("in");
              $("a[aria-expanded=true]").attr("aria-expanded", "false");
            }}
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
            
          </div>
        </div>
      </nav>
      <FrontProfiles></FrontProfiles>
    </>
  );
}
export default FrontEnd;
