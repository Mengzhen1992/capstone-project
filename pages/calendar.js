import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import LayoutStyle from "../components/LayoutStyle";
import "react-big-calendar/lib/css/react-big-calendar.css";

import styled from "styled-components";
import { useMemo } from "react";

export default function MyCalendar() {
  const localizer = momentLocalizer(moment);
  const { defaultDate, views } = useMemo(
    () => ({
      defaultDate: new Date(),
      views: {
        day: true,
      },
    }),
    []
  );
  const events = [
    {
      id: 0,
      title: "Board meeting",
      start: new Date(2022, 10, 10, 9, 0, 0),
      end: new Date(2022, 10, 10, 13, 0, 0),
    },
    {
      id: 1,
      title: "MS training",
      allDay: false,
      start: new Date(2022, 10, 10, 14, 0, 0),
      end: new Date(2022, 10, 10, 16, 30, 0),
    },
  ];
  return (
    <LayoutStyle>
      <CalenderWrap>
        <Calendar
          localizer={localizer}
          defaultDate={defaultDate}
          events={events}
          views={views}
          defaultView={Views.DAY}
          step={60}
          min={new Date(2022, 10, 10, 6, 0)}
          startAccessor="start"
          endAccessor="end"
        />
      </CalenderWrap>
    </LayoutStyle>
  );
}

const CalenderWrap = styled.div`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  margin-top: -1rem;
  background: var(--color-background);
  box-shadow: var(--shadow-box);
  border-radius: 10px;
  font-size: 1.2rem;
  color: var(--color-taskname);
  opacity: 0.9;
`;
