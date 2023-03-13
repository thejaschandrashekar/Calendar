import React from 'react';

interface CalendarProps {
  date: Date;
}

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const firstDay = new Date(year, date.getMonth(), 1);
  const lastDay = new Date(year, date.getMonth() + 1, 0);
  const selectedDate = new Date(year, date.getMonth()).getDate();

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  let dates: any[] = [];
  for (let i = 1; i <= lastDay.getDate(); i++) {
    dates = [...dates, i]
  }

  let emptyCells: any[] = []
  for (let i = 0; i < firstDay.getDay(); i++) {
    emptyCells = [...emptyCells, i]
  }

  return (
    <div className="calendar">
      <div className="calendar-month">{`${month} ${year}`}</div>
      <div className="calendar-days">
        {weekDays.map((day) => (<div className="calendar-day" key={day}>
          {day}
        </div>))}
      </div>
      <div className="calendar-dates">
        {emptyCells.map((item: any) => (
          <div className="calendar-date" key={item}></div>
        ))}
        {dates.map((item: any) => (<div className={`calendar-date ${(selectedDate === item) ? 'selected' : ''}`}
          key={item}>
          {item}
        </div>))}
      </div>
    </div>
  );
};

export default Calendar;

