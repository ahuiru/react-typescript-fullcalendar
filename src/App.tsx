import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import "./App.css";

function App() {
  const thisMonth = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')
    }`;
  };

  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locales={allLocales}
        locale="ja"
        events={[
          { title: "event1", date: `${thisMonth()}-01` },
          { title: "event2", date: `${thisMonth()}-02` },
        ]}
      />
    </div>
  );
}

export default App;
