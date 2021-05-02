import React ,{useState }from 'react'
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

import './Calendar.css'

export default function Calendar(){
    let [scheduleObj, setscheduleObj] = useState(new ScheduleComponent({}));
    let [dataManager, setdataManager] = useState(new DataManager({
        url: 'http://localhost:3001/GetData',
        crudUrl: 'http://localhost:3001/BatchData',
        adaptor: new UrlAdaptor(),
        crossDomain: true
      }));

  
    return (
        <div className="control-section">
        <div className="schedule-control">
          <ScheduleComponent id="schedule" ref={(schedule) => scheduleObj = schedule} height="550px"
            selectedDate={new Date()} currentView="Month" eventSettings={{ dataSource: dataManager }}>
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
    )
}
