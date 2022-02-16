import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles.css'


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const events = [
    {
        title: "Meeting",
        allDay: true,
        start: new Date(2022, 2, 2),
        end: new Date(2022, 2, 2)
    },
    {
        title: "Gym",
        start: new Date(2022, 2, 2),
        end: new Date(2022, 2, 2)
    },
    {
        title: "Lunch",
        start: new Date(2022, 2, 2),
        end: new Date(2022, 2, 2)
    },
]




function CalendarApp() {
    const [newEvent, setNewEvent] = useState({title:"", start:"", end:""});
    const [allEvents, setAllEvents] = useState(events);

    function handleEvent(){
        setAllEvents([...allEvents, newEvent])
    }
    return (
        <div>
        <div class = "NewEvent">
            <h2> Add New Event </h2>
        
            <input type="text" placeholder="Add title" style ={{width: "20%", marginRight: "10px"}}
            value = {newEvent.title} onChange = {(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
            <DatePicker placeholderText="Start" style={{marginRight: "10px"}}
            selected = {newEvent.start} onChange = {(start) => setNewEvent({...newEvent, start: start})} />
            <DatePicker placeholderText="End"
            selected = {newEvent.end} onChange = {(end) => setNewEvent({...newEvent, end: end})} />
            <button style= {{ marginTop: "10px"}} onClick={handleEvent}> Add New Event </button>
        </div>
        <div className="CalendarApp">
            <Calendar localizer={localizer} events={allEvents}
                startAccessor="start" endAccessor="end" />
        </div>
        </div>
    );
}

export default CalendarApp