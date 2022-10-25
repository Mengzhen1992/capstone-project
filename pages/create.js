import styled from "styled-components";
import { useRouter } from "next/router";
import LayoutSytle from "../components/LayoutStyle";

export default function Create({ appendTask, getCurrentDate }) {
  const router = useRouter();
  function sendForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { title, date, startTime, durationHour, durationMinute } =
      Object.fromEntries(formData);
    /* // another way to remove white space
    if (title.trim() === "") {
      alert("the name cannot bu empty!");
      return;
    } */
    appendTask(title, durationHour, durationMinute);
    router.push("/");
  }

  return (
    <LayoutSytle>
      <FormContainer>
        <FormTitle>Create New Task</FormTitle>
        <form onSubmit={sendForm}>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
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
          <Label htmlFor="duration">Duration</Label>
          <InputWrap>
            <DurationInput
              type="number"
              name="durationHour"
              id="duration"
              min={0}
              max={24}
              title="give a number between 0 and 24"
              required
            />
            <Text>h</Text>
            <DurationInput
              type="number"
              name="durationMinute"
              id="duration"
              min={0}
              max={60}
              title="give a number between 0 and 60"
              required
            />
            <Text>min</Text>
          </InputWrap>
          <Button type="submit">Create</Button>
          <Button onClick={() => router.push("/")}>Cancel</Button>
        </form>
      </FormContainer>
    </LayoutSytle>
  );
}

const FormContainer = styled.main`
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  padding: 2rem 1rem 0rem 1rem;
  margin-top: -2rem;
`;

const FormTitle = styled.h2`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
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
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(30px);
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1.2rem;
`;

const DurationInput = styled.input`
  border: 0;
  width: 28%;
  height: 2rem;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
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
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1.2rem;
`;

export const Button = styled.button`
  display: block;
  background: rgba(223, 30, 123, 0.59);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(30px);
  border-radius: 12px;
  width: 8rem;
  height: 2.5rem;
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: #fff;
  margin: 2rem auto 1rem auto;
  cursor: pointer;
  &:hover {
    background: rgba(223, 30, 123, 0.8);
  }
`;
