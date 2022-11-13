import styled from "styled-components";
import { useRouter } from "next/router";
import LayoutSytle from "../components/LayoutStyle";
import { useSession, getSession } from "next-auth/react";
import { useState } from "react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/onboarding",
      },
    };
  }
  return {
    props: { session },
  };
};

export default function Create() {
  const router = useRouter();
  const { data: session } = useSession();
  const [start, setStart] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setStart(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Get data from form
    const formData = new FormData(event.target);
    const { name, date, startTime, endTime } = Object.fromEntries(formData);
    const data = {
      name: name,
      isFinished: false,
      email: session.user.email,
      ticoUser: session.user.name,
      start: new Date(date + "T" + startTime + ":00"),
      end: new Date(date + "T" + endTime + ":00"),
      totalTime:
        (new Date(date + "T" + endTime + ":00").getTime() -
          new Date(date + "T" + startTime + ":00").getTime()) /
        1000,
    };
    const JSONdata = JSON.stringify(data);

    // Send data to server
    const url = "/api/tasks";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    await fetch(url, options);
    router.push("/");
  }

  return (
    <LayoutSytle>
      <FormContainer>
        <Title>Create New Task</Title>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="name">Title</Label>
          <Input
            type="text"
            name="name"
            id="name"
            pattern="^(?!\s)[a-zA-Z0-9 ]{1,}$"
            title="the name cannot be empty!"
            required
          />
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            title="give a date"
            min={new Date().toISOString().slice(0, -14)}
            required
          />
          <Label htmlFor="startTime">Start Time</Label>
          <Input
            type="time"
            name="startTime"
            id="startTime"
            min="06:00"
            max="23:59"
            onChange={handleChange}
            required
          />
          <Label htmlFor="ednTime">End Time</Label>
          <Input
            type="time"
            name="endTime"
            id="endTime"
            min={start}
            max="23:59"
            required
          />
          <Button
            onClick={(event) => {
              event.preventDefault();
              router.push("/");
            }}
          >
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </form>
      </FormContainer>
    </LayoutSytle>
  );
}

const FormContainer = styled.main`
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
  background: var(--color-background);
  box-shadow: var(--shadow-box);
  border-radius: 8px;
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  padding: 2rem 1rem 0rem 1rem;
  margin-top: -2rem;
  margin-bottom: 10%;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  align-self: center;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  padding-bottom: 0.3rem;
  padding-top: 0.8rem;
`;

const Input = styled.input`
  align-self: center;
  border: 0;
  width: 100%;
  height: 2rem;
  background: var(--color-task);
  box-shadow: var(--shadow-box);
  backdrop-filter: blur(30px);
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1.2rem;
`;

export const Button = styled.button`
  display: inline;
  background: var(--color-button);
  box-shadow: var(--shadow-box);
  border: 1px solid var(--shadow-addbutton);
  border-radius: 15px;
  width: 40%;
  height: 2.5rem;
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: var(--color-button-font);
  margin: 3rem 5% 1rem 5%;
  cursor: pointer;
  &:hover {
    background: var(--color-button-hover);
  }
`;
