import React, { useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import "./App.css";

const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
};

function App() {

  const handleDateClick = useCallback((arg: DateClickArg) => {
    // console.log(arg);
    // alert(info.event.title);
  }, []);


  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        locales={allLocales}
        locale="ja"
        eventClick={
          function (arg) {
            console.log(arg.event)
            alert([arg.event.title, arg.event.startStr])
            // alert(arg.event.start)
          }
        }
        events={[
          { title: "event1", date: `${thisMonth()}-01` },
          { title: "event2", date: `${thisMonth()}-02` },
          { title: "basket", date: `${thisMonth()}-08` },
        ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek",
        }}
        dateClick={handleDateClick}
      />
    </div>
  );
}

export default App;
