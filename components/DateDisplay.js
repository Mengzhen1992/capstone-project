import styled from "styled-components";
export default function DateDisplay() {
  return <DateText>2022.10.11 Tuesday</DateText>;
}

const DateText = styled.p`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 0.3rem;
  padding-left: 1.5rem;
`;
