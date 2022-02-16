import { useState } from "react";

const daysArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
];

const monthNamesArray = ['January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December'
];

const calendar = (days = daysArray, monthNames = monthNamesArray) => {
  const today = new Date();
  const dateFormat = `${today.getFullYear()} ${today.getMonth() + 1} ${today.getDate()}`;
  const weekdays = [1, 2, 3, 4, 5, 6, 7];
  const [selectedDate, setSelectedDate] = useState(today);
}


