import styled from "styled-components";
export default function DateDisplay({ date }) {
  return <DateText>{date}</DateText>;
}

const DateText = styled.p`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
`;
