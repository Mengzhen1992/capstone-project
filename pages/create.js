import clock from "../public/images/clock.svg";
import calendar from "../public/images/calendar.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { Wrap, WrapMask } from ".";
import styled from "styled-components";

export default function Create() {
  const router = useRouter();
  return (
    <Wrap>
      <FormWrapMask>
        <FormContainer>
          <FormTitle>Create New Task</FormTitle>
          <Form>
            <label for="task-title">Title</label>
            <input
              type="text"
              name="title"
              id="task-title"
              placeholder="Your task name"
              required
            />
            <label for="task-date">Date</label>
            <div>
              <input type="date" name="date" id="task-date" required />
              <Image
                src={calendar}
                alt="calendar item for choosing a date"
              ></Image>
            </div>
            <label for="task-start-time">Start Time</label>
            <div>
              <input
                type="date"
                name="start-time"
                id="task-start-time"
                required
              />
              <Image
                src={calendar}
                alt="calendar item for choosing a start time"
              ></Image>
            </div>
            <label for="task-duration">Duration</label>
            <div>
              <input type="date" name="duration" id="task-duration" required />
              <Image
                src={clock}
                alt="clock item for choosing a duration"
              ></Image>
            </div>
          </Form>
          <CreateButton>Create</CreateButton>
          <CancelButton
            onClick={() => {
              router.push("/");
            }}
          >
            Cancel
          </CancelButton>
        </FormContainer>
      </FormWrapMask>
    </Wrap>
  );
}

const FormWrapMask = styled.div`
  display: grid;
  grid-template-columns: 1.5rem auto 1.5rem;
  grid-template-rows: 8rem auto 12rem;
  width: 100vw;
  min-height: 100vh;
  background: rgba(253, 231, 190, 0.4);
  backdrop-filter: blur(40px);
`;

const FormContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  padding-bottom: 0.6rem;
  padding-left: 1rem;
  padding-top: 1rem;
`;

const FormTitle = styled.h2`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
`;

const Form = styled.form`
  grid-column: 1 / span 4;
  grid-row: 2 / span 3;
`;

const CreateButton = styled.button`
  grid-column: 2 / span 2;
  grid-row: 5 / span 1;
`;

const CancelButton = styled.button`
  grid-column: 2 / span 2;
  grid-row: 6 / span 1;
`;
