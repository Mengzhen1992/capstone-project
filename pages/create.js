import styled from "styled-components";
import { useRouter } from "next/router";
import LayoutSytle from "../components/LayoutStyle";
import { getCurrentDate } from "../ultils";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Create() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/auth/login");
      return;
    }
  }, session);

  async function handleSubmit(event) {
    event.preventDefault();

    // Get data from form
    const formData = new FormData(event.target);
    const { name, date, startTime, durationHour, durationMinute } =
      Object.fromEntries(formData);
    const data = {
      name: name,
      isFinished: false,
      email: session.user.email,
      ticoUser: session.user.name,
      totalTime: Number(durationHour) * 3600 + Number(durationMinute) * 60,
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

    /* const response = await fetch(url, options);
    const result = await response.json();
    if (result.createdId) {
      router.push("/");
    } else {
      alert("Creating a product did not work!");
    } */
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
            pattern="^(?!\s)[a-zA-Z ]{1,}$"
            title="the name cannot be empty!"
            required
          />
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            title="give a task name"
            min={getCurrentDate().replaceAll(".", "-").slice(0, 10)}
            required
          />
          <Label htmlFor="startTime">Start Time</Label>
          <Input
            type="time"
            name="startTime"
            id="startTime"
            min="00:00"
            max="24:00"
            required
          />
          <Label htmlFor="totalTime">totalTime</Label>
          <InputWrap>
            <DurationInput
              type="number"
              name="durationHour"
              id="totalTime"
              min={0}
              max={24}
              title="give a number between 0 and 24"
              required
            />
            <Text>h</Text>
            <DurationInput
              type="number"
              name="durationMinute"
              id="totalTime"
              min={0}
              max={60}
              title="give a number between 0 and 60"
              required
            />
            <Text>min</Text>
          </InputWrap>
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

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
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

const DurationInput = styled.input`
  border: 0;
  width: 28%;
  height: 2rem;
  background: var(--color-task);
  box-shadow: var(--shadow-box);
  backdrop-filter: blur(30px);
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1.2rem;
`;
const Text = styled.p`
  width: 18%;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  background: var(--color-task);
  box-shadow: var(--shadow-text);
  backdrop-filter: blur(30px);
  border-radius: 5px;
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
