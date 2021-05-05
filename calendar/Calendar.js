import React, { useState, useEffect } from "react";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import axios from "axios";
import "./Calendar.css";
import $ from "jquery";

export default function Calendar() {
  let [scheduleObj, setscheduleObj] = useState(new ScheduleComponent({}));
  let [dataManager, setdataManager] = useState(
    new DataManager({
      url: "http://localhost:3001/GetData",
      crudUrl: "http://localhost:3001/BatchData",
      adaptor: new UrlAdaptor(),
      crossDomain: true,
    })
  );

  useEffect(() => {
    const jwt = localStorage.getItem("jwt_info");
    var idConnected = "";
    if (jwt) {
      idConnected = JSON.parse(jwt).user;
      console.log(idConnected);
      axios
        .post("http://localhost:3001/idConnected", idConnected)
        .then((res) => console.log(res.data));
    }
  });

  return (
    <>
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
      <div className="control-section">
        <div className="schedule-control">
          <ScheduleComponent
            id="schedule"
            ref={(schedule) => (scheduleObj = schedule)}
            height="550px"
            selectedDate={new Date()}
            currentView="Month"
            eventSettings={{ dataSource: dataManager }}
          >
            <ViewsDirective>
              <ViewDirective option="Day" />
              <ViewDirective option="Week" />
              <ViewDirective option="WorkWeek" />
              <ViewDirective option="Month" />
              <ViewDirective option="Agenda" />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
    </>
  );
}
