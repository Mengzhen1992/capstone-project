import styled from "styled-components";
import { useRouter } from "next/router";
import LayoutSytle from "../components/LayoutStyle";
import { getCurrentDate } from "../ultils";

export default function Create() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    // Get data from form
    const formData = new FormData(event.target);
    const { name, date, startTime, durationHour, durationMinute } =
      Object.fromEntries(formData);
    const data = {
      name: name,
      isFinished: false,
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
          <Button type="submit">Create</Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              router.push("/");
            }}
          >
            Cancel
          </Button>
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
  margin-bottom: 10%;
`;

export const Title = styled.h2`
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
  display: inline;
  background: rgba(223, 30, 123, 0.59);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  width: 40%;
  height: 2.5rem;
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: #fff;
  margin: 15% 5% 1rem 5%;
  cursor: pointer;
  &:hover {
    background: rgba(223, 30, 123, 0.8);
  }
`;
