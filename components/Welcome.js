import styled from "styled-components";

export default function Welcome() {
  return <WelcomeText>Hi Monki</WelcomeText>;
}

const WelcomeText = styled.h2`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  margin-top: 1.5rem;
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 900;
  font-size: 2.2rem;
`;
