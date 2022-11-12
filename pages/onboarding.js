import { signIn } from "next-auth/react";
import styled from "styled-components";
import LayoutSytle from "../components/LayoutStyle";
import { MovingComponent } from "react-moving-text";

export default function Onboading() {
  return (
    <LayoutSytle>
      <LoginWrap>
        <Logo>
          <MovingComponent
            type="popIn"
            duration="6000ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="10"
            fillMode="none"
          >
            Tico
          </MovingComponent>
        </Logo>
        <LoginText>Easy task & time management</LoginText>
        <LoginButton onClick={() => signIn()}>Get Started</LoginButton>
      </LoginWrap>
    </LayoutSytle>
  );
}

const LoginWrap = styled.span`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h2`
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 8rem;
`;

const LoginText = styled.p`
  font-family: var(--font-primary);
  color: var(--color-date);
  font-size: 1.2rem;
`;

const LoginButton = styled.button`
  background: var(--color-button);
  box-shadow: var(--shadow-addbutton);
  border: 1px solid var(--color-addbutton-border);
  border-radius: 15px;
  font-family: var(--font-primary);
  font-size: 1.4rem;
  color: var(--color-button-font);
  text-align: center;
  height: 2.5rem;
  width: 10rem;
  margin-top: 2.5rem;
  cursor: pointer;
`;
