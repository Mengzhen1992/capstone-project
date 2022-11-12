import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import LayoutStyle from "../components/LayoutStyle";
import back from "../public/images/back.svg";
import { useRouter } from "next/router";
import Image from "next/image";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";
import { useMemo } from "react";
import { getSession } from "next-auth/react";
import Task from "../models/Task";
import dbConnect from "../lib/dbConnect";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/onboarding",
      },
    };
  }

  await dbConnect();

  const result = await Task.find({ email: session.user.email });

  const tasks = result.map((item) => {
    const startDate = item.start;
    const endDate = new Date(item.start.getTime() + item.totalTime * 1000);

    return {
      id: item.id,
      title: item.name,
      start: startDate.toJSON(),
      end: endDate.toJSON(),
    };
  });
  return { props: { tasks: tasks } };
};

export default function MyCalendar({ tasks }) {
  const router = useRouter();
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

  const events = tasks.map((item) => ({
    ...item,
    start: new Date(item.start),
    end: new Date(item.end),
  }));

  return (
    <LayoutStyle>
      <ImageContainer onClick={() => router.push("/")}>
        <Image src={back} alt="button to homepage" />
      </ImageContainer>
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
  margin-top: -3.2rem;
  font-size: 1.2rem;
`;

const ImageContainer = styled.div`
  grid-column: 2 / span 1;
  margin-top: 1.6rem;
`;
