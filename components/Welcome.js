import styled from "styled-components";

export default function Welcome() {
  return <WelcomeText>Hi Monki</WelcomeText>;
}

const WelcomeText = styled.h2`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 900;
  font-size: 2.2rem;
`;
