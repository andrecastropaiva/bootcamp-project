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
    return (
        <div className="CalendarApp">
            <Calendar localizer={localizer} events={events}
                startAccessor="start" endAccessor="end" />
        </div>
    );
}

export default CalendarApp